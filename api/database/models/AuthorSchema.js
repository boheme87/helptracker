var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: String,
    email: String,
    optOut: {
        type: Boolean,
        default: true
    },
    home: String,
});

module.exports = mongoose.model('AuthorSchema', AuthorSchema);
