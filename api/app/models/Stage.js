var Schema       = mongoose.Schema;
var Author       = require('./Author');
var Location       = require('./Location');

var StageSchema   = new Schema({
    author: Author,
    createdAt: Date,
    location: Location
});

module.exports = StageSchema; 