var HelpThread = require('./HelpThread');

module.exports = class HelpThreadFactory {

    static create(name, authorName, authorEmail, optOut, authorHome) {
        let threadId = Math.random() * 10000;
        return new HelpThread(threadId, name, authorName, authorEmail, optOut, authorHome);
    }
}
