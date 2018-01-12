var express = require('express');
const _=require('lodash');
var bodyparser = require('body-parser');
var {mongoose} = require('./db/db.js');
var {todo} = require('./model/todo.js');
var {user} = require('./model/user.js');
const {ObjectID}=require('mongodb');

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

app.get("/todos",(req,res)=>{
   todo.find().then((todos)=>{
      res.send({todos});
   },(err)=>{
        res.status(400).send(err);
   });
});

//to fetch single user through query
app.get("/todos/:id",(req,res)=>{
    var id = req.params.id;
    //res.send(req.params);
    if(!ObjectID.isValid(id)){
        res.status(404).send("Invalid id");
    }


    todo.findById(id).then((doc)=>{
        if(!doc)
        {
            return res.status(404).send("doc not found");
        }
        res.send(doc);
    },(err)=>{
        return res.status(400).send("err");
    })

});
app.delete("/todos/:id",(req,res)=>{
   var id = req.params.id;
   if(!ObjectID.isValid(id)){
       return res.status(404).send();
   }
    todo.findOneAndRemove('5a56ed9c7d0f22e41af16fc5').then((docs)=> {

        if (!docs)
        {
          return  res.status(404).send("not found");
        }
        else{res.send(docs);}
    }).catch((e)=>{
       res.status(404).send(e);
    });
});

app.put("/todos/:id",(req,res)=> {

    var id = req.params.id;
    todo.findOneAndUpdate(id,

        {
            $set: {
                text: "brush ur teeth"
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
        res.send(result);
    });
})

app.post("/user",(req,res)=>{
    var body=_.pick(req.body,["email","password"]);
    var user1= new user(body);

    user1.save().then((User)=>{
        res.send(User)
    }).catch((e)=>{
        res.status(404).send(e);
    })
});

app.listen(3000,()=>{
    console.log(`started server on port :3000`);
});

module.exports={app};