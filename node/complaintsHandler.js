const c = require('./consts')

const handleComplaints = function (complaint) {
   if (complaint.type == c.FINANCE) {
       console.log("Money doesn't grow on trees, you know")
   } else if (complaint.type == c.EMOTIONS) {
    console.log("It'll pass, as all things do, with time.") 
   }
}


module.exports.handleComplaints = handleComplaints