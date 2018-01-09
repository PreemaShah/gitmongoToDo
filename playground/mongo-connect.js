var {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDb");

db.collection('UserName').insertOne({
    Name:"suresh",
    Age:20,
    location :"surat",
},(err,result)=> {
    if(err)
    {
        return console.log("Unable to update"+err);

    }
        console.log("Document Inserted");
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();

});