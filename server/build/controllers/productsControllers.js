"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const database_1 = require("../database");
class ProductsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield database_1.Mysql.query("SELECT * FROM cuentabancaria WHERE fk_num_identificacion=?", [req.params.num_id]);
                res.json(products);
            }
            catch (error) {
                console.log(error);
                res.json({ message: "Error" });
            }
        });
    }
    getP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield database_1.Mysql.query("SELECT * FROM cuentabancaria WHERE id_cuenta=?", [req.params.id_cuenta]);
                res.json(product);
            }
            catch (error) {
                console.log(error);
                res.json({ message: "Error" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("INSERT INTO cuentabancaria set ?", [req.body]);
                res.json({
                    message: "Cuenta Creada",
                });
            }
            catch (error) {
                console.log(error);
                res.json({ message: "Error" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("DELETE FROM cuentabancaria WHERE id_cuenta=?", [req.params.id_cuenta]);
                res.json({
                    message: "Cuenta Eliminada"
                });
            }
            catch (error) {
                console.log(error);
                res.json({ message: "Error" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("UPDATE cuentabancaria set ? WHERE id_cuenta=?", [req.body, req.params.id_cuenta]);
                res.json({
                    message: "Cuenta Actualizada"
                });
            }
            catch (error) {
                console.log(error);
                res.json({ message: "Error" });
            }
        });
    }
}
exports.productsController = new ProductsController();
