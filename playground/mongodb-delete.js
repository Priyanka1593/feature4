const MongoClient=require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDB");

    // deleteMany
    /*db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((result)=>{
        console.log(result);
    });*/
    
    // deleteOne
    /*db.collection('Todos').deleteOne({text:"Eat Lunch"}).then((result)=>{
        console.log(result);
    });*/

    //find one and delete
    db.collection('Todos').findOneAndDelete({text:"Eat Lunch"}).then((result)=>{
        console.log(result);
    })
 
});