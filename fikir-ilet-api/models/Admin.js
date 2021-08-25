const mongoose = require("mongoose");

const Schema=mongoose.Schema

const AdminSchema =new Schema({
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        require:true,
    },
})

module.exports= mongoose.model('admin',AdminSchema)