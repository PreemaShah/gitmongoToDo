var {mongoose} = require('./../server/db/db.js');
var {todo} = require('./../server/model/todo.js');
var {user} = require('./../server/model/user.js');

/*todo.remove({}).then((result)=>{
    console.log(result);
});*/

todo.findOneAndRemove('5a56ed9c7d0f22e41af16fc4').then((docs)=>{

    console.log(docs);
})