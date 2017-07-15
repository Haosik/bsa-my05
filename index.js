const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
	console.log(`Server started! go to localhost:${port}`)
	res.send('Hello World')
})

app.listen(port)