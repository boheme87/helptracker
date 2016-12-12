module.exports = class HelpThread {

    constructor(authorName, authorEmail, optOut, authorHome, location) {
        this.author = {
            name: authorName,
            email: authorEmail,
            optOut: false,
            home: authorHome
        };
        this.createdAt = Date.now();
        this.location = location;
    }
};
