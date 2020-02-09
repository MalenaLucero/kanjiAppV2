const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://malena:malena@kanjiapp-aijqu.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

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
}

module.exports = WordService