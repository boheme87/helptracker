var HelpThreadModel = require('../../database/models/HelpThread');

module.exports = class ThreadRepository {

   create(helpThread) {
        thread.name = req.body.name;
            thread.author = {
                name: 'Achim',
                email: 'a@m.com',
                optOut: false,
                home: 'Munich'
            };
            thread.threadId = 'abcd';
            thread.createdAt = Date.now();
            thread.stages = [{
                author: {
                    name: 'Achim',
                    email: 'a@m.com',
                    optOut: false,
                    home: 'Munich'
                },
                createdAt: Date.now()
            }]

            thread.save(function (err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'HelpThread created!'
                });
            });

            
        let thread = new HelpThreadModel();
        helpThread.save(function (err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'HelpThread created!'
                });
            });
   }
}