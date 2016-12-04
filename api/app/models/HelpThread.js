var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Author       = require('./Author');
var Stage       = require('./Stage');

var HelpThreadSchema = new Schema({
    threadId: String,
    name: String,
    author: Author,
    createdAt: Date,
    stages: [Stage]
});

module.exports = mongoose.model('HelpThreads', HelpThreadSchema);