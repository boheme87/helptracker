var BaseRouter = require('../../api/BaseRouter');

module.exports = class ThreadRouter extends BaseRouter {

    constructor() {
        super();
        this.init();
        var PostThreadController = require('./PostThreadController');
        this.postThreadController = new PostThreadController();
        this.that = this;
    }

    init() {
        var that = this;
        this.router.route('/threads').post(function(req, res) {
            var controller = that.postThreadController;
            controller.handle(req.body);
            res.json(that.STATUS_SUCCESS);
        });
    }
};
