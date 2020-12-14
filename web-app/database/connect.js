const MongoClient = require('mongodb').MongoClient;
const connection = require('./hiddenPasswords.js')

const sampleUser = {
    "First Name" : "Rick",
    "Last Name"  : "Sanchez",
    "Address"    : "25 Eastern Drive",
    "Town" : "Newark",
    "State" : "NJ",
    "Drivers License ID" : "S1389939292",
    "Age" : "46"
};

MongoClient.connect(connection, 
    {useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('blockchain-voting');

    /*
    db.createCollection("votersCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
    })
    

    db.collection("votersCollection").insertOne(sampleUser, function(err,res){
        if (err) throw err;
        console.log("1 document inserted");
    });
    

    db.collection("votersCollection").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });
    */

});

