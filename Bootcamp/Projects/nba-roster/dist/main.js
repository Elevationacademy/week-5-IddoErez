const render = (teamPlayers) => {
    $("#players").empty()
    const source = $("#player-template").html()
    const template = Handlebars.compile(source)
    const playerHtml = template({ teamPlayers })
    $("#players").append(playerHtml)
}

const fetchTeamData = () => {
    let input = $("#team-input").val()
    $.get(`teams/${input}`, function (teamPlayers) {
        render(teamPlayers)
    });
}

// class Renderer {
//     constructor(data){
//         this.data = data
//     }

// displayPlayers() {
//    $("#players").empty()
//    const source = $("#player-template").html()
//    const template = Handlebars.compile(source)
//    const playerHtml = template({ data })
//    $("#players").append(playerHtml)
// }
// renderTeam() {
//    this.displayPlayers()
// }
// }

// const fetchTeamData = () => {
//    let input = $("#team-input").val()
//    $.get(`teams/${input}`, function (teamPlayers) {
//        const render = new Renderer(teamPlayers)
//        render.renderTeam()
      
//    });
// }

