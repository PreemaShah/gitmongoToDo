var {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDb");

  /*  db.collection('UserName').deleteMany({Name:"suresh"}).then((result)=>{
        console.log("Data Deleted");
        console.log(result);
    },(err)=>{
        console.log('unable to delete userNames',err);
    });
*/

  /*  db.collection('UserName').deleteOne({Name:"suresh ramesh"}).then((result)=>{
        console.log("Data Deleted");
        console.log(result);
    },(err)=>{
        console.log('unable to delete userNames',err);
    });
 */

    db.collection('UserName').findOneAndDelete({
        _id:new ObjectID("5a544e6885b6932354cb9d7d")
    }).then((result)=>{
        console.log("Data Deleted");
        console.log(result);
    },(err)=>{
        console.log('unable to delete userNames',err);
    });
    db.close();

});