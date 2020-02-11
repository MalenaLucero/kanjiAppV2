fetch('https://kanjiapi.dev/v1/kanji/蛍')
            .then(res=>res.json())
            .then(res=>console.log(res))