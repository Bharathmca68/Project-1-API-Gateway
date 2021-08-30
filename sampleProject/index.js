require('dotenv').config();
var express = require('express');
var app = express();
var Router = require('./routers/router');
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway intigration");
})

app.use(Router)


app.listen(process.env.PORT,()=>{
    console.log(`Simple API Gateway run on localhost: ${process.env.PORT}`)
});