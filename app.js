const express = require('express')
const path = require('path');

const app = express()
const port = 8010

const staticOptions = {
    maxAge: 0
  };

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/css',express.static('css', staticOptions));
app.use('/js',express.static('js', staticOptions));
app.use('/img',express.static('img', staticOptions));

app.listen(port, () => console.log(`Restaurants app listening on port ${port}!`))