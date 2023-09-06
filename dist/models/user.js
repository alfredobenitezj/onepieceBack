"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    userName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required().messages({
        'string.base': `"email" debe ser tipo 'texto'`,
        'string.email': `El "email"  no es válido`,
        'string.empty': `El "email" no debe ser vacío`,
    }),
    password: joi_1.default.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
});
