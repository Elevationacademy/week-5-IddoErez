// --1 --- 

let p = $.get('/randomWord')
p.then (function (word) {
console.log(word) 
$.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`, function (data) {
               console.log(data)
               let title = data.items[5].volumeInfo.title
               $("body").append(title)
})
})
//  ---2 -----
$.get('/randomWord').then(function (word) {
       const books = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
       const giph = $.get(`https://api.giphy.com/v1/stickers/search?api_key=Nid2qZwUHZCgNZogdCwKnMFS5gFBHQV9&q=${word}&limit=1`)
        Promise.all([books, giph])
            .then(function (results) {
            console.log(results)                   
            const bookTitle = results[0].items[5].volumeInfo.title
            console.log(bookTitle)
            $("body").append(bookTitle)
              const giph1 = results[1].data[0].embed_url
              console.log(giph1)
            $("body").append($(`<img src=${giph1}/>`))
        })
    })












// })             //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// console.log(p)

// p.then (function (word) {
//  $.get('/sentiment/' + word)
// })

// $.get('/sentiment/Ploy')
//     .then(function (response) {
//         console.log(response)
//     })


// .then(function (word) {
//     console.log(word)
//     return $.get('/synonyms/' + word)
   
// })
// .then(function (synonyms){
//     console.log(synonyms)
// })


// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })

//     $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })



//     const printResults = function (word, synonyms, sentiment) {
//         console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`
//         )
//     }
    
//     $.get('/randomWord')
//         .then(function (word) {
//             let synonymsPromise = $.get(`/synonyms/${word}`)
//             let sentimentPromise = $.get(`/sentiment/${word}`)
//             Promise.all([synonymsPromise, sentimentPromise])
//                 .then(function (results) {
//                     printResults(word, results[0], results[1])
//                 })
//         })

        
// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

