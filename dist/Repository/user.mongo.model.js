"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: { type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: {
            urlOriginal: { type: String },
            url: { type: String },
            mimetype: { type: String },
            size: { type: Number },
        },
        required: true,
    },
    addNotice: [{
            type: mongoose_1.Schema.Types.ObjectId,
        }],
});
