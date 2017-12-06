var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    } 
});

module.exports={Todo};