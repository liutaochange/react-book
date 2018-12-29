const request = require('request');
const cheerio = require('cheerio');
const Router = require('koa-router');
const replaceText = (text) => { return text.replace(/\n/g, "").replace(/\s/g, "") };
const targetUrl = 'https://www.jianshu.com/';
const mongoose = require('mongoose');
const router = new Router();
let data = [];
// 插入数据到数据库
// 请求地址： http://localhost:6001/list/saveList
router.get('/saveList', ctx => {
  request(targetUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body); // 当前的$ 为body的选择器
      $('#list-container .note-list li').each(function (i, elem) {
        let _this = $(elem);
        data.push({
          id: _this.attr('data-note-id'),
          slug: _this.find('.content').find('.title').attr('href').replace(/\/p\//, ""),
          author: {
            slug: _this.find('.nickname').attr('href').replace(/\/u\//, ""),
            nickname: replaceText(_this.find('.nickname').text())
          },
          title: replaceText(_this.find('.title').text()),
          abstract: replaceText(_this.find('.abstract').text()),
          thumbnails: _this.find('.wrap-img img').attr('src') || "",
          comments_count: replaceText(_this.find('.ic-list-comments').parent().text()) * 1,
          likes_count: replaceText(_this.find('.ic-list-like').parent().text()) * 1
        });
      });
      let saveCount = 0
      const List = mongoose.model('List')
      data.map((value) => {
        let newGoods = new List(value)
        newGoods.save().then(() => {
          saveCount++
          console.log('成功' + saveCount)
        }).catch(error => {
          console.log('失败：' + error)
        })
      })
      ctx.body = "请求成功"
    } else {
      ctx.body = "请求失败"
    }
  })
});

// 返回文章列表给前端展示
router.post('/getArticleList', async (ctx) => {
  try {
    const articleList = mongoose.model('List');
    let result = await articleList.find().exec();
    ctx.body = { status: 200, data: result, message: "success" }
  } catch (err) {
    ctx.body = { status: 500, data: "", message: "error" }
  }
});

module.exports = router;