var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HelpThreadSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('HelpThreads', HelpThreadSchema);