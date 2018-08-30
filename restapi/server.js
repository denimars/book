const express = require('express');
const app = express();
const port = 3000;
const testing = require('./route')

app.use('/api', testing.router);
console.log(testing.test);

app.listen(port, ()=> console.log('just testing'));