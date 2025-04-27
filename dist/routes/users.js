"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }]);
});
exports.default = router;
//# sourceMappingURL=users.js.map