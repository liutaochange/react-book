const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 创建模型
 */
const listSchema = new Schema({
  id: String,
  slug: String,
  author: {
    slug: String,
    nickname: String
  },
  title: String,
  abstract: String,
  thumbnails: String,
  comments_count: Number,
  likes_count: Number
}, {
  collection: 'List'
})

/**
 * 发布模型
 */
mongoose.model('List', listSchema)