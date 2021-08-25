const mongoose = require("mongoose");

const Schema = mongoose.Schema

const FikirSchema=new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    typeofidea:{
        type:String,
        require:true
    },
    idea:{
        type:String,
        require:true
    }
    
})

module.exports=mongoose.model('fikirler',FikirSchema)