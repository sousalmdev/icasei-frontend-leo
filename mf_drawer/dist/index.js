"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/videos', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.get('/favorites', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`MF_DRAWER is running on http://localhost:${PORT}`);
});
