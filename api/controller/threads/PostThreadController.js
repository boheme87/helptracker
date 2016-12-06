var HelpThreadFactory = require('./HelpThread/HelpThreadFactory');
var ThreadRepository = require('../../database/repositories/ThreadRepository');

module.exports = class PostThreadController {

    constructor() {
        this.repository = new ThreadRepository();
    }

    handle(body) {
        let helpThread = HelpThreadFactory
            .create(body.name,
                body.authorName,
                body.authorEmail,
                body.optOut,
                body.authorHome);
                console.log(helpThread);
        this.repository.create(helpThread);

    }
}
