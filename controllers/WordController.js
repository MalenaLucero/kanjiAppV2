const getKanjiFromWord = require('../helpers/getKanjiFromWord')

class WordController{
    constructor(wordService){
        this.wordService = wordService
    }
    async getWords(req,res){
        const words = await this.wordService.getWords()
        if(words){
            return res.json(words)
        }else{
            return res.sendStatus(404)
        }
    }
    async getWord(req,res){
        const word = req.params.word
        const wordInfo = await this.wordService.getWord(word)
        if(wordInfo){
            return res.json(wordInfo)
        }else{
            return res.sendStatus(404)
        }
    }
    async addWord(req,res){
        const body = req.body
        const word = await this.wordService.getWord(body.word)
        if(body.word && !word){
            await this.wordService.addWord(body) 
            return res.sendStatus(200)
        }else{
            return res.sendStatus(400)
        }
    }
}

module.exports = WordController