require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/giphy', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=2&rating=pg`) // example
        .then(response => {
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        })
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});