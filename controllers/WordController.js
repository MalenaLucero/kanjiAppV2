class WordController{
    constructor(wordService){
        this.wordService = wordService
    }
    async getWords(req,res){
        const words = await this.wordService.getWords()
        console.log(words)
        if(words){
            return res.json(words)
        }else{
            return res.sendStatus(404)
        }
    }
}

module.exports = WordController