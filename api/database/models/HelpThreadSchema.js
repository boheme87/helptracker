var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthorSchema = mongoose.model('AuthorSchema').schema;
var StageSchema = mongoose.model('StageSchema').schema;


var HelpThreadSchema = new Schema({
    threadId: String,
    name: String,
    author: AuthorSchema,
    createdAt: Date,
    stages: [StageSchema]
});

module.exports = mongoose.model('HelpThreadSchema', HelpThreadSchema);
