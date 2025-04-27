"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./utils/logger"));
const PORT = process.env.PORT || 3000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const server = app_1.default.listen(PORT, () => {
                logger_1.default.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
            });
            const shutdown = () => __awaiter(this, void 0, void 0, function* () {
                logger_1.default.info('Shutting down server...');
                server.close(() => __awaiter(this, void 0, void 0, function* () {
                    logger_1.default.info('Server connection closed.');
                    process.exit(0);
                }));
            });
            process.on('SIGINT', shutdown);
            process.on('SIGTERM', shutdown);
        }
        catch (error) {
            logger_1.default.error('Failed to start server:', error);
            process.exit(1);
        }
    });
}
process.on('uncaughtException', error => {
    logger_1.default.error(error, 'Uncaught Exception');
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    logger_1.default.error(reason, 'Unhandled Rejection', { promise });
    process.exit(1);
});
startServer();
//# sourceMappingURL=server.js.map