var HelpThreadModel = require('../app/models/HelpThread');

module.exports = class GlobalRouter {

    constructor() {
        this.express = require('express');
        this.router = this.express.Router();

    };

    initMiddlewareLogger() {
        this.router.use(function (req, res, next) {
            console.log('Request received');
            next();
        });
    }

    init() {
        this.initMiddlewareLogger();
        this.initRoutes();
        return this.router;
    }



    initRoutes() {
        this.router.route('/thread').post(function (req, res) {
            var thread = new HelpThreadModel();
            thread.name = req.body.name;
            thread.save(function (err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'HelpThread created!'
                });
            });
        });
    }

};