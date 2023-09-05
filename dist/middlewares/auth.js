"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const http_error_1 = require("../models/http.error");
class AuthServices {
    static createToken(payload) {
        return jsonwebtoken_1.default.sign(payload, config_1.secret);
    }
    static verifyToken(token) {
        try {
            const result = jsonwebtoken_1.default.verify(token, config_1.secret);
            if (typeof result === 'string') {
                throw new http_error_1.HttpError(498, 'Invalid Token', result);
            }
            return result;
        }
        catch (error) {
            throw new http_error_1.HttpError(498, 'Invalid Token', error.message);
        }
    }
    static hash(value) {
        return (0, bcrypt_1.hash)(value, AuthServices.salt);
    }
    static compare(value, hash) {
        return (0, bcrypt_1.compare)(value, hash);
    }
}
exports.AuthServices = AuthServices;
AuthServices.salt = 10;
