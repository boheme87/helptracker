var HelpThreadModel = require('../../database/models/HelpThread');

module.exports = class ThreadRepository {

    create(helpThread) {
        let thread = new HelpThreadModel();
        thread.name = helpThread.name;
        thread.author = helpThread.author;
        thread.threadId = helpThread.threadId;
        thread.createdAt = helpThread.createdAt;
        thread.stages = [];

        thread.save(function (err) {
            if (err)
                throw new Error('Err during save ' + err);
        });
    }
}
