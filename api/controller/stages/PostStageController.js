var StageFactory = require('./Stage/StageFactory');
var ThreadRepository = require('../../database/repositories/ThreadRepository');

module.exports = class PostStageController {

    constructor() {
        this.repository = new ThreadRepository();
    }

    handle(body) {
        let stage = StageFactory
            .create(body.authorName,
                body.authorEmail,
                body.optOut,
                body.authorHome,
                body.location);
        this.repository.insertOneStage(stage,helpThread);

    }
};
