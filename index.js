const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	console.log(`Server started! go to localhost:${port}`)
	res.send('Hello World')
});

const routes = require('./routes/api/routes')(app);

app.listen(port);