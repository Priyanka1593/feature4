const MongoClient=require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDB");

    db.collection('User').findOneAndUpdate(
        {_id:new ObjectID('5a1fa9874e7ca8167c92aef3')},
        {
            $set:{
                name:"Kiran"
            },
            $inc:{
                age:1
            }
        },{
            returnOriginal:true
        }).then((result)=>{
            console.log(result);
        })
});