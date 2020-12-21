const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connection = require('./hiddenPasswords.js');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('web-app/public/'));
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(connection,
    {useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('blockchain-voting');   
    const voterCollection = db.collection("votersCollection");
    app.post('/register', (req, res) => {
        console.log(JSON.stringify(req.body));
        voterCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => console.log(error)); 
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


