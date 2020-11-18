const express = require('express')
const urllib = require('urllib')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

let playersData

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response) {
    const data = JSON.parse(response)
    playersData = data.league.standard
})
app.get('/teams/:teamName', (req, res) => {
    const teamPlayers = []
    const teamName = req.params.teamName
    const teamID = teamToIDs[teamName]
    for (let player of playersData) {
        if ((player.teamId === teamID) && (player.isActive)) {
            const nbaPlayer = {}
            nbaPlayer.firstName = player.firstName
            nbaPlayer.lastName = player.lastName
            nbaPlayer.position = player.pos
            nbaPlayer.jerseyNum = player.jersey
            teamPlayers.push(nbaPlayer)

        }
    }
    res.send(teamPlayers)
    console.log(teamPlayers)
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
