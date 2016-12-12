var mongoose = require('mongoose');

module.exports = class ThreadRepository {

    create(helpThread) {
        var HelpThreadModel = require('../models/HelpThreadSchema');
        let thread = new HelpThreadModel();
        thread.name = helpThread.name;
        thread.author = helpThread.author;
        thread.threadId = helpThread.threadId;
        thread.createdAt = helpThread.createdAt;
        thread.stages = [];

        thread.save(function(err) {
            if (err)
                throw new Error('Err during save ' + err);
        });
    }

    insertOneStage(stage, helpThreadId) {

        var HelpThreadModel = require('../models/HelpThreadSchema');
        HelpThreadModel.findOne({
            'threadid': HelpThreadModel.threadId
        }, function(err, helpThread) {
            if (err) {
                throw new Error('Err during finding helpThread ' + err);
            }
            var StageModel = require('../models/StageSchema');
            let stage = new StageModel();
            stage.author = stage.author;
            stage.createdAt = stage.createdAt;

            helpThread.stages.push(stage);

            helpThread.save(function(err) {
                if (err) {
                    throw new Error('Err during save of stage' + err);
                }
            });
        });
    }
};
