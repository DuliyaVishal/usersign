const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb+srv://Vishal_solanki:UTGUa3Nl8qlZ7iTL@cluster0.ccqdks2.mongodb.net/global?retryWrites=true&w=majority", {
     useUnifiedTopology:true,useNewUrlParser:true
}).then(result => {
    console.log("connected")
})
    .catch(err => {
        console.log("not connected")
    })

module.exports = connection;