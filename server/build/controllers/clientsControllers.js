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
exports.clientsController = void 0;
const database_1 = require("../database");
class ClientsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield database_1.Mysql.query("SELECT * FROM cliente");
                console.log(clients);
                res.json(clients[0]);
            }
            catch (error) {
                console.log("Error DB: " + error);
            }
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield database_1.Mysql.query("SELECT * FROM cliente WHERE num_identificacion=?", [req.params.num_id]);
                console.log(clients);
                if (clients.length > 0) {
                    return res.json(clients[0]);
                }
                res.status(404).json({ text: 'El cliente no existe' });
            }
            catch (error) {
                console.log("Error DB: " + error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("INSERT INTO cliente set ?", [req.body]);
                res.json({
                    message: "Cliente Creado",
                });
            }
            catch (error) {
                console.log("Error: " + error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("DELETE FROM cliente WHERE num_identificacion=?", [req.params.num_id]);
                res.json({
                    message: "Cliente Eliminado",
                });
            }
            catch (error) {
                console.log("Error: " + error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.Mysql.query("UPDATE cliente set ? WHERE num_identificacion=?", [req.body, req.params.num_id]);
                res.json({
                    message: "Cliente Actualizado",
                });
            }
            catch (error) {
                console.log("Error: " + error);
            }
        });
    }
}
exports.clientsController = new ClientsController();
