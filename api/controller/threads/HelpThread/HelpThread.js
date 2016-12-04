module.exports = class HelpThread {

    constructor(threadId, name, authorName, authorEmail, optOut, authorHome) {
        thread.name = req.body.name;
        thread.author = {
            name: authorName,
            email: authorEmail,
            optOut: false,
            home: authorHome
        };
        thread.threadId = threadId;
        thread.createdAt = Date.now();
        thread.stages = [];
    }

}