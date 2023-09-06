"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeModel = void 0;
const mongoose_1 = require("mongoose");
const noticeSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        urlOriginal: { type: String },
        url: { type: String },
        mimetype: { type: String },
        size: { type: Number },
        required: true,
    },
    owner: { type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    }
});
noticeSchema.set('toJSON', {
    transform(_document, returnObject) {
        returnObject.id = returnObject._id;
        delete returnObject.__v;
        delete returnObject._id;
        delete returnObject.passwd;
    },
});
exports.NoticeModel = (0, mongoose_1.model)('notice', noticeSchema, 'notices');
