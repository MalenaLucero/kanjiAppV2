const myMongoClient = require('../variables')
const { MongoClient } = require('mongodb')
const uri = `mongodb+srv://${myMongoClient.user}:${myMongoClient.password}@kanjiapp-aijqu.gcp.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri);
const Word = require('../models/Word')
const getKanjiFromWord = require('../helpers/getKanjiFromWord')

const KanjiService = require('../services/KanjiService')
const KanjiInstance = new KanjiService()

class WordService{
    async getWords(){
        try {
            await client.connect();
            const words = await client.db("kanjiApp").collection("words").find().toArray();
            return words
        } catch(error){
            console.error(error)
        }
    }
    async getWord(word){
        try {
            await client.connect();
            const wordInfo = await client.db("kanjiApp").collection("words").findOne({word: word});
            return wordInfo
        } catch(error){
            console.error(error)
        }
    }
    async addWord(body){
        try {
            await client.connect();
            await client.db("kanjiApp").collection("words").insertOne(new Word(body));
            const newKanji = getKanjiFromWord(body.word)
            for(let i=0; i < newKanji.length; i++){
                const kanji = await KanjiInstance.getOneKanji(newKanji[i])
                if(!kanji){
                    KanjiInstance.addKanji(newKanji[i])
                }
            }
        } catch(error){
            console.error(error)
        }
    }
}

module.exports = WordService