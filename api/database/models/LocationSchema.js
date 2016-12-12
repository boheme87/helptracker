var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    }
});

LocationSchema.index({
    location: '2dsphere'
});

module.exports = mongoose.model('LocationSchema', LocationSchema);
