const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');
const md5 = require('./md5');



const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/heroes/:id', (req, res, next) => {
    const reqURL = `http://comicvine.gamespot.com/api`;
    const resource = `characters`;
    const apiKey = config.privateKey;
    // console.log(req.params.id);
    // const searchTerm = `Green Lantern`.toLowerCase();
    const myURL = `${reqURL}/${resource}/?api_key=${apiKey}&format=json&filter=name:${req.params.id}`;
    axios.get(myURL).then(response => res.send(response.data)).catch(console.log);
});

app.listen(port, function () {
    console.log('Hello, Your server will take you on port', port);
});