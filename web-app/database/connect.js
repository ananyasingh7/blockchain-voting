const MongoClient = require('mongodb').MongoClient;
const connection = require('./hiddenPasswords.js')



MongoClient.connect(connection, 
    {useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
});

