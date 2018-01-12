var mongoose = require('mongoose');

var todo = mongoose.model('todoapps',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
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
    text:"wash clothes",
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
