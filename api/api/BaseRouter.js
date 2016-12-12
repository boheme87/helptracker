module.exports = class BaseRouter {

    constructor() {
        this.express = require('express');
        this.router = this.express.Router();

        this.STATUS_SUCCESS = '{ "status": "success" }';
        this.STATUS_FAILURE = '{ "status": "failure" }';
    }

    getRoutes() {
        return this.router;
    }
};
