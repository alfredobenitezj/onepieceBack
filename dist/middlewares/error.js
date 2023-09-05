"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_error_1 = require("../models/http.error");
const mongoose_1 = __importStar(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('FinalMeme:Error');
const errorHandler = (error, _req, res, _next) => {
    debug('Executed');
    if (error instanceof http_error_1.HttpError) {
        console.error(error.status, error.statusMessage, error.message);
        res.status(error.status);
        res.statusMessage = error.message;
        res.send({
            status: error.status,
        });
        return;
    }
    if (error instanceof mongoose_1.default.Error.ValidationError) {
        console.error('400 Bad Request', error.message);
        res.status(400);
        res.statusMessage = 'Bad Request';
        res.send({
            status: '400 Bad Request',
        });
        return;
    }
    if (error instanceof mongoose_1.mongo.MongoServerError) {
        console.error('406 Not accepted', error.message);
        res.status(406);
        res.statusMessage = 'Not accepted';
        res.send({
            status: '406 Not accepted',
        });
        return;
    }
    console.error(error);
    res.status(500);
    res.send({
        error: error.message,
    });
};
exports.errorHandler = errorHandler;
