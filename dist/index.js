"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use("/", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "https://mservices.zinghr.com",
    changeOrigin: true,
}));
const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});