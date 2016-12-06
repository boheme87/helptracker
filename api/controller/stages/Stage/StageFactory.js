var Stage = require('./Stage');

module.exports = class StageFactory {

    static create(authorName, authorEmail, optOut, authorHome,location) {
        return new Stage(authorName, authorEmail, optOut, authorHome,location);
    }
}
