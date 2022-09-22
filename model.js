const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   userName: { type: String, require: true, unique:true, match:/^[a-zA-Z\-]+$/},
   // email: { type: String, require: true, unique: true },
   //phone: {type: Number,require:true,unique:true},
    password: { type: String, require: true }
    
});
module.exports=mongoose.model("new", userSchema)