const getKanjiFromWord = require('../helpers/getKanjiFromWord')

function Word({word, reading, meaning, context, label}){
    this.word = word
    this.reading = reading
    this.meaning = meaning
    this.context = context
    this.kanji = getKanjiFromWord(word)
    this.label = label
}

module.exports = Word