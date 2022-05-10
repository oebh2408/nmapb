"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysql = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const keys_1 = __importDefault(require("./keys"));
const connect = () => {
    const pool = promise_1.default.createPool(keys_1.default.database);
    pool.getConnection();
    console.log('Database Connected');
    return pool;
};
exports.Mysql = connect();
