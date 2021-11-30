const mongoose = require("mongoose");

const task = new mongoose.Schema({
    id : {type:String, required:true},
    task :{type:String ,required: true},
})
module.exports=mongoose.model("Task",task);