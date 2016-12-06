var GeoJSON      = require('mongoose-geojson-schema');
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LocationSchema = new Schema({
    country: String,
    city: String,
    detail: String,
    location: mongoose.Schema.Types.Point
});

module.exports = LocationSchema; //mongoose.model('Location', LocationSchema);
