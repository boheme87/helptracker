var BaseRouter = require('../../api/BaseRouter');
var PostThreadController = require('./PostThreadController');

module.exports = class ThreadRouter extends BaseRouter {

    constructor() {
        super();
        this.init();
        this.postThreadController = new PostThreadController();
    };

    init() {
        // all routes here
        this.router.route('/threads').post(function (req, res) {
            this.postThreadController.handle(req.body);
        });
    }

}