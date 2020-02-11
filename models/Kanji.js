function Kanji(kanji, grade, strokeCount, meaning, kunReading, onReading, jlpt, unicode){
    this.kanji = kanji
    this.grade = grade
    this.strokeCount = strokeCount
    this.meaning = meaning
    this.kunReading = kunReading
    this.onReading = onReading
    this.jlpt = jlpt
    this.unicode = unicode
}

module.exports = Kanji