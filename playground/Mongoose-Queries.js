var {mongoose} = require('./../server/db/db.js');
var {todo} = require('./../server/model/todo.js');
var {user} = require('./../server/model/user.js');
 /*todo.find({
     _id:id
 }).then((todos)=>{
   console.log("Todos:",todos);
});

todo.findOne({
    _id:id
}).then((Todo)=>{
    console.log("Todo:",Todo)
});

todo.findById(id).then((Todo)=>{

    if(!Todo)
    {
     return console.log("todo by id not found")
    }
        console.log("todo by id  found",Todo);
});*/
user.findById("5a559be93a349f1c23bd38e9").then((User)=>{

    if(!User)
    {
        return console.log("User by id not found")
    }
    console.log("todo by id  found",User);
});
