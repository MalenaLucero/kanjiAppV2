class KanjiController{
    constructor(kanjiService){  
        this.kanjiService = kanjiService
    }
    async getAllKanji(req,res){
        const allKanji = await this.kanjiService.getAllKanji()
        if(allKanji){
            return res.json(allKanji)
        }else{
            return res.sendStatus(404)
        }
    }
    async getOneKanji(req,res){
        const kanji = req.params.kanji
        const kanjiInfo = await this.kanjiService.getOneKanji(kanji)
        if(kanjiInfo){
            return res.json(kanjiInfo)
        }else{
            return res.sendStatus(404)
        }
    }
    async addKanji(req,res){
        const body = req.body
        if(body.kanji){
            const newKanji = await this.kanjiService.addKanji(body)
            res.sendStatus(200)
        }else{
            res.sendStatus(400)
        }
    }
}

module.exports = KanjiController