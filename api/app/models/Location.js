var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LocationSchema = new Schema({  
    country: String,
    city: String,
    detail: String,
    loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      
    }
});

module.exports = LocationSchema; //mongoose.model('Location', LocationSchema);