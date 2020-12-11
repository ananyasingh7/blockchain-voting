const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('public/register.html'))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


