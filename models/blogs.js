const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogschema= new Schema({
    Name:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Locality:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Phone:{
        type:Number,
        require:true
    }
},{timestamps:true});

//here blogs is taken as an argument as table 

const Blog=mongoose.model('form',blogschema);
module.exports= Blog;

