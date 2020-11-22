const express = require('express')
const router = express.Router()

const wordCounter = {child: 1}

router.get('/sanity', function (req, res) {
    res.send("server up and running")
})

router.get('/word/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        res.send({ count: wordCounter[req.params.word] })
       
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word/:word', function (req, res) {
    if (wordCounter[req.params.word]) {
        wordCounter[req.params.word]++
    } else {
        wordCounter[req.params.word] = 1
    }
    res.send({ text: `Added ${req.params.word}`, currentCount: wordCounter[req.params.word] })
})



router.post('/word/:sentence', function (req, res) {
    let numNewWords =0
    let numOldWords = 0 
    let sentence = req.params.sentence
    const sentenceToArray = sentence.split(" ")
    for (let word of sentenceToArray) {
        if (wordCounter[word]) {
            wordCounter[word]++
            numOldWords++
        }
     else {
         wordCounter[word] = 1 
         numNewWords++
     }
    }
    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

module.exports = router