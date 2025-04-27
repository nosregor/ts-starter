"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pino_http_1 = __importDefault(require("pino-http"));
const logger_1 = __importDefault(require("./utils/logger"));
const example_1 = __importDefault(require("./routes/example"));
const healthz_1 = __importDefault(require("./routes/healthz"));
const errors_1 = require("./utils/errors");
const errorHandler_1 = require("./middleware/errorHandler");
const swagger_1 = require("./docs/swagger");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10kb' }));
app.use((0, pino_http_1.default)({ logger: logger_1.default, autoLogging: true }));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use('/healthz', healthz_1.default);
app.use('/user', healthz_1.default);
app.use('/api', example_1.default);
app.all('*', (req, res, next) => {
    next(new errors_1.AppError(`This path ${req.originalUrl} isn't on this server!`, 404));
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map