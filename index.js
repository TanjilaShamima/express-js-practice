const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded());

const port = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send('This is homepage');
})

app.post('/', (req, res) => {
    console.log("POST", req.body);
    res.send('This is homepage with post');
});

app.listen(port, () => console.log('listening on port', port));