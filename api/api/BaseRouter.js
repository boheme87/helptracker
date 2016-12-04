module.exports = class BaseRouter {

    constructor() {
        this.express = require('express');
        this.router = this.express.Router();
    };

    getRoutes() {
        return this.router;
    }
}