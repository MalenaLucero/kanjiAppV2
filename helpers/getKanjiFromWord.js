const getKanjiFromWord = word =>{
    let kanjiArray = []
    for (const c of word) {
        if(c.charCodeAt() >= 13312){
            kanjiArray.push(c)
        }
    }
    return kanjiArray
}

module.exports = getKanjiFromWord