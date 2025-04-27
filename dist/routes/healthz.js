"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});
exports.default = router;
//# sourceMappingURL=healthz.js.map