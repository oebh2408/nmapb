"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientsControllers_1 = require("../controllers/clientsControllers");
class ClientsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientsControllers_1.clientsController.list);
        this.router.get('/:num_id', clientsControllers_1.clientsController.listOne);
        this.router.post('/', clientsControllers_1.clientsController.create);
        this.router.delete('/:num_id', clientsControllers_1.clientsController.delete);
        this.router.put('/:num_id', clientsControllers_1.clientsController.update);
    }
}
const clientsRoutes = new ClientsRoutes();
exports.default = clientsRoutes.router;
