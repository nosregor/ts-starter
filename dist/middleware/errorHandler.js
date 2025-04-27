"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const errors_1 = require("../utils/errors");
const logger_1 = __importDefault(require("../utils/logger"));
function errorHandler(err, req, res) {
    const isAppError = err instanceof errors_1.AppError;
    const statusCode = isAppError ? err.statusCode : 500;
    const message = isAppError ? err.message : 'Something went wrong';
    logger_1.default.error(err);
    res.status(statusCode).json(Object.assign({ status: 'error', message }, (process.env.NODE_ENV !== 'production' && { stack: err.stack })));
}
//# sourceMappingURL=errorHandler.js.map