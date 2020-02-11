const myMongoClient = require('../variables')
const { MongoClient } = require('mongodb')
const uri = `mongodb+srv://${myMongoClient.user}:${myMongoClient.password}@kanjiapp-aijqu.gcp.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri);
const Kanji = require('../models/Kanji')
const getKanjiFromWord = require('../helpers/getKanjiFromWord')
const fetch = require('node-fetch')
const utf8 = require('utf8')

class KanjiService{
    async getAllKanji(){
        try {
            await client.connect();
            const allKanji = await client.db("kanjiApp").collection("kanji").find().toArray();
            return allKanji
        } catch(error){
            console.error(error)
        }
    }
    async getOneKanji(kanji){
        try {
            await client.connect();
            const kanjiInfo = await client.db("kanjiApp").collection("kanji").findOne({kanji: kanji});
            return kanjiInfo
        } catch(error){
            console.error(error)
        }
    }
    async addKanji(arr){
        try{
            await client.connect();
            const newKanjiInfo = await fetch(utf8.encode(`https://kanjiapi.dev/v1/kanji/${arr[0]}`)).then(res=>res.json()).then(res=> res)
            const {kanji, grade, stroke_count, meanings, kun_readings, on_readings, jlpt, unicode} = newKanjiInfo
            const newKanji = new Kanji(kanji, grade, stroke_count, meanings, kun_readings, on_readings, jlpt, unicode)
            await client.db("kanjiApp").collection("kanji").insertOne(newKanji); 
        } catch(error){
            console.error(error)
        }
    }
}

module.exports = KanjiService