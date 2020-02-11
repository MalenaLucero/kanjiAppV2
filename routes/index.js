var express = require('express');
var router = express.Router();

const WordController = require('../controllers/WordController')
const WordService = require('../services/WordService')
const WordInstance = new WordController(new WordService())

const KanjiController = require('../controllers/KanjiController')
const KanjiService = require('../services/KanjiService')
const KanjiInstance = new KanjiController(new KanjiService())

router.get('/words', (req,res)=>{
  WordInstance.getWords(req,res)
})

router.get('/words/:word',(req,res)=>{
  WordInstance.getWord(req,res)
})

router.post('/words', (req,res)=>{
  WordInstance.addWord(req,res)
})

router.get('/kanji', (req,res)=>{
  KanjiInstance.getAllKanji(req,res)
})

router.get('/kanji/:kanji',(req,res)=>{
  KanjiInstance.getOneKanji(req,res)
})

router.post('/kanji', (req,res)=>{
  KanjiInstance.addKanji(req,res)
})

module.exports = router;
