var BaseRouter = require('../../api/BaseRouter');

module.exports = class StageRouter extends BaseRouter {

    constructor() {
        super();
        this.init();
        var PostStageController = require('./PostStageController');
        this.postStageController = new PostStageController();
        this.that = this;
    }

    init() {
        var that = this;
        this.router.route('/threads/:id/stages').post(function(req, res) {
            var controller = that.postStageController;
            controller.handle(req.body, req.params.id);
            res.json(that.STATUS_SUCCESS);
        });
    }

};
