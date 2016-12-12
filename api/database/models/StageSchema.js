var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthorSchema = mongoose.model('AuthorSchema').schema;
var LocationSchema = mongoose.model('LocationSchema').schema;

var StageSchema = new Schema({
    author: AuthorSchema,
    createdAt: Date,
    location: LocationSchema
});

module.exports = mongoose.model('StageSchema', StageSchema);
