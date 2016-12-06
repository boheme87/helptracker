var HelpThreadModel = require('../../database/models/HelpThread');
var StageModel = require('../../database/models/Stage');

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

    insertOneStage(stage, helpThread) {
      HelpThreadModel.findById(helpThread.threadId, function(err, helpThread) {
           if (err)
               res.send(err);

            let stage = new StageModel();
            stage.author = stage.author;
            stage.createdAt = stage.createdAt;
            helpThread.stages.push(stage);
            helpThread.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

       });
    }
};
