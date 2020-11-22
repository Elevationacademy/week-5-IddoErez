let timeNow = new Date()
console.log(timeNow)
const moment = require('moment')

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017
const urllib = require('urllib')

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})

urllib.request('http://www.omdbapi.com/?apikey=1f213feb&t=The lion king', function(err, response){
    let answer = response.toString()
    let parsed = JSON.parse(answer)
    console.log(parsed.Released)
})