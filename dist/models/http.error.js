"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(status, statusMessage, message) {
        super(message);
        this.status = status;
        this.statusMessage = statusMessage;
        this.message = message;
    }
}
exports.HttpError = HttpError;
