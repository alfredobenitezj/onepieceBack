"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const config_1 = require("../config/config");
const dbConnect = () => {
    const uri = `mongodb+srv://${config_1.user}:${config_1.password}@cluster0.cpjvmhc.mongodb.net/${config_1.db}?retryWrites=true&w=majority`;
};
exports.dbConnect = dbConnect;
