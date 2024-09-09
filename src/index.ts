import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  "/",
  createProxyMiddleware({
    target: "https://mservices.zinghr.com",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
