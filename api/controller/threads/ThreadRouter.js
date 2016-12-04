var BaseRouter = require('../../api/BaseRouter');


module.exports = class ThreadRouter extends BaseRouter {

    constructor() {
        super();
        this.init();
        var PostThreadController = require('./PostThreadController');
        this.postThreadController = new PostThreadController();
    };

    init() {
        this.router.route('/threads').post(function (req, res) {
            var controller = this.postThreadController;
           await controller.handle(req.body);
           res.json('{}');
        });
    }

}