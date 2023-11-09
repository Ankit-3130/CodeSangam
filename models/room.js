const mongoose=require('mongoose');

const roomSchema= new mongoose.Schema({
    Type:{
        type:String,
        required:true,
        default:'public'
    },
    rounds:{
        type:Number,
        required:true,
        default:'2'
    },
    limitTime:{
        type:Number,
        required:true,
        default:'80'
    },
    admin:{
        type:String
    },
    roomID:{
        type:String
    },
    probableWords:{},
    players:[]
},
{timestamps:true});

module.exports=mongoose.model('Room',roomSchema);