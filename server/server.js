var express = require('express');
var bodyparser = require('body-parser');
var {mongoose} = require('./db/db.js');
var {todo} = require('./model/todo.js');
var {user} = require('./model/user.js');


var app = express();
app.use(bodyparser.json());

app.post("/todos",(req,res)=>{
   var Todo= new todo({
       text:req.body.text
   });
   Todo.save().then((doc)=>{
    res.send(doc);
   },(err)=>{
       res.send(err);
   });
});

app.listen(3000,()=>{
    console.log("started on port 3000")
});

module.exports={app};