var HelpThreadFactory = require('./HelpThread/HelpThreadFactory');
var ThreadRepository = require('../../database/repositories/ThreadRepository');

module.exports = class PostThreadController {

    constructor() {
        this.repository = new ThreadRepository();
    }

    async handle(body) {

        let helpThread = HelpThreadFactory
            .create(body.name,
                body.authorName,
                body.authorEmail,
                body.optOut,
                body.authorHome);

        await this.repository.create(helpThread);
        return "test";
    }
}