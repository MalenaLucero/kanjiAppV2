const myMongoClient = require('../variables')
const { MongoClient } = require('mongodb')
const uri = `mongodb+srv://${myMongoClient.user}:${myMongoClient.password}@kanjiapp-aijqu.gcp.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri);
const Word = require('../models/Word')

class WordService{
    async getWords(){
        try {
            await client.connect();
            const words = await client.db("kanjiApp").collection("words").find().toArray();
            return words
        } finally {
            await client.close();
        }
    }
    async getWord(word){
        try {
            await client.connect();
            const wordInfo = await client.db("kanjiApp").collection("words").findOne({word: word});
            return wordInfo
        } finally {
            await client.close();
        }
    }
    addWord(body){
        async function main(){
            try {
                await client.connect();
                const newWord = await client.db("kanjiApp").collection("words").insertOne(new Word(body));
            } finally {
                await client.close();
            }
        }
        main().catch(console.error);
    }
}

module.exports = WordService