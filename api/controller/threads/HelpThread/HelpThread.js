module.exports = class HelpThread {

    constructor(threadId, name, authorName, authorEmail, optOut, authorHome) {
        this.name = name;
        this.author = {
            name: authorName,
            email: authorEmail,
            optOut: false,
            home: authorHome
        };
        this.threadId = threadId;
        this.createdAt = Date.now();
        this.stages = [];
    }

}
