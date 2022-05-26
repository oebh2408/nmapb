"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sedesControllers_1 = require("../controllers/sedesControllers");
class SedesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', sedesControllers_1.sedesController.list);
    }
}
const sedesRoutes = new SedesRoutes();
exports.default = sedesRoutes.router;
