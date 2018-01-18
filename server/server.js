var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');
var port=process.env.PORT || 3000;
var app=express();
app.use(bodyParser.json());

// Save todo in the collection
app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
   // console.log(req.body);
   todo.save().then((doc)=>{
       res.send(doc);
   },(e)=>{
       res.status(400).send(e);
   })
});
// List all todos from collection
app.get('/todos',(req,res)=>{
    Todo.find().then((docs)=>{
        res.send({docs});
    },(e)=>{
        res.status(400).send(e);
    })
});

// Fetch specific todo from collection

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo})
    }).catch((e)=>{
        res.status(400).send();
    })
  
});

app.listen(port,()=>{
    console.log(`Started up at port ${port}`);
})