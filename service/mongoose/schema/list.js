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
    avatar: String,
    nickname: String,
    sharedTime: Date
  },
  title: String,
  abstract: String,
  thumbnails: String,
  collection_tag: String,
  reads_count: Number,
  comments_count: Number,
  likes_count: Number
}, {
  collection: 'List'
})

/**
 * 发布模型
 */
mongoose.model('List', listSchema)