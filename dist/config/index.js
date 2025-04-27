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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function getStringEnv(variable, defaultValue) {
    const val = process.env[variable];
    if (!val) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`${variable} not found. Set ${variable} environment variable.`);
    }
    return val;
}
const NODE_ENV = getStringEnv('NODE_ENV', 'development');
const APP_NAME = getStringEnv('APP_NAME', 'app name');
const PORT = getStringEnv('PORT', '3000');
const SECRET = getStringEnv('SECRET', 'TOP_SECRET');
const POSTGRES_URL = getStringEnv('POSTGRES_URL', 'postgresql://postgres:password@postgres:5432/feebee');
const MONGO_URI = getStringEnv('MONGO_URI', 'mongodb://localhost:27017/example');
const REDIS_URL = getStringEnv('REDIS_URL', 'redis://localhost:6379');
const development = {
    name: APP_NAME,
    port: PORT,
    database: {
        POSTGRES_URL: POSTGRES_URL,
        MONGO_URI: MONGO_URI,
        REDIS_URL: REDIS_URL,
    },
    secret: SECRET,
};
const production = {
    name: APP_NAME,
    port: PORT,
    database: {
        POSTGRES_URL: POSTGRES_URL,
        MONGO_URI: MONGO_URI,
        REDIS_URL: REDIS_URL,
    },
    secret: SECRET,
};
const config = { development, production };
exports.default = config[NODE_ENV];
//# sourceMappingURL=index.js.map