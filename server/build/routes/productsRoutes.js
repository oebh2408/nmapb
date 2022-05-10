"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = require("../controllers/productsControllers");
class ProductsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsControllers_1.productsController.list);
        this.router.post('/', productsControllers_1.productsController.create);
        this.router.delete('/:num_id', productsControllers_1.productsController.delete);
        this.router.put('/:num_id', productsControllers_1.productsController.update);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
