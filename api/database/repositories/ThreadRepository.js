var HelpThreadModel = require('../../database/models/HelpThread');

module.exports = class ThreadRepository {

    async create(helpThread) {
        thread.name = helpThread.name;
        thread.author = helpThread.author;
        thread.threadId = helpThread.author;
        thread.createdAt = helpThread.createdAt;
        thread.stages = helpThread.stages;

        await thread.save(function (err) {
            if (err)
                throw new 'Err during save' + err;
        });
    }
}