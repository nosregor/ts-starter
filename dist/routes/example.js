"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errors_1 = require("../utils/errors");
const router = (0, express_1.Router)();
router.get('/fail', () => {
    throw new errors_1.AppError('This route fails intentionally', 400);
});
exports.default = router;
//# sourceMappingURL=example.js.map