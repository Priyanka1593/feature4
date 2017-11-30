const MongoClient=require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDB");
   /* db.collection('User').find({_id:new ObjectID("5a1fa9874e7ca8167c92aef3")}).toArray().then((docs)=>{
        console.log('User');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable to fetch records");
    });*/

   /*  db.collection('User').find().count().then((count)=>{
        console.log('Count=>',count);
       
    },(err)=>{
        console.log("Unable to fetch records");
    });*/
      db.collection('User').find({name:"Sagar"}).toArray().then((docs)=>{
       // console.log('Count=>',count);
       console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable to fetch records");
    });

    db.collection('User').find({name:"Sagar"}).count().then((count)=>{
       // console.log('Count=>',count);
       console.log("No of Records=> ",count);
    })

});