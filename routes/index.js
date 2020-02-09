var express = require('express');
var router = express.Router();

const WordController = require('../controllers/WordController')
const WordService = require('../services/WordService')
const WordInstance = new WordController(new WordService())

router.get('/words', (req,res)=>{
  WordInstance.getWords(req,res)
})

router.get('/words/:word',(req,res)=>{
  WordInstance.getWord(req,res)
})

router.post('/words', (req,res)=>{
  WordInstance.addWord(req,res)
})

module.exports = router;
