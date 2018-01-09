var mongoose = require('mongoose');

var todo = mongoose.model('ToDoApp',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

/*var newtodo = new todo({
    text:"eat dinner",
    completed:true
});

newtodo.save().then((doc)=>{
    console.log("saved todo",doc);
},(err)=>{
    console.log("Unable to save ");
});

var othertodo = new todo({
    text:"wash plates",
    completed:true
});

othertodo.save().then((doc)=>{
    console.log("saved todo",doc);
},(err)=>{
    console.log("Unable to save ");
});*/
module.exports = {
    todo
};
