var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config.json');
var GlobalRouter = require('./api/GlobalRouter');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect(config.connectionString, function (err) {
    if (err) {
        console.log("Database conncetion Error: ", err);
    }
});

var port = process.env.PORT || 8080;

app.use('/api', new GlobalRouter().getRoutes());



app.listen(port);
console.log('Server waiting for requests on port' + port);
