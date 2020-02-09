const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  word:{
      type: String,
      required: true
  },
  reading:{
      type: String
  },
  meaning:{
      type: String
  },
  context:{
      type: String
  },
  kanji:[],
  labels:[]
})

module.exports = wordSchema