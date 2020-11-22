const c = require('./consts')
const ch = require("./complaintsHandler")


let complaint1 = {
    text: "I'm not getting enough money",
    type: c.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: c.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: c.EMOTIONS
}

ch.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
ch.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
ch.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."