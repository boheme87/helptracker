var HelpThreadModel = require('../database/models/HelpThread');
var ThreadRouter = require('../controller/threads/ThreadRouter');
var StageRouter = require('../controller/stages/StageRouter');
var BaseRouter = require('./BaseRouter');

module.exports = class GlobalRouter extends BaseRouter {

    constructor() {
        super();
        this.init();
    };

    init() {
        this.initMiddlewareLogger();
        this.initRoutes();
    }

    initMiddlewareLogger() {
        this.router.use(function (req, res, next) {
            console.log('Request received');
            next();
        });
    }

    initRoutes() {
        this.router.use('/', new ThreadRouter().getRoutes());
        this.router.use('/', new StageRouter().getRoutes());
    }

};
