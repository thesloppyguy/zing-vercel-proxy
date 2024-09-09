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


// import express from "express";
// import { createProxyMiddleware } from "http-proxy-middleware";
// import https from 'https';
// import cors from "cors";
// import fs from 'fs';
// const app = express();

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(
//   "/",
//   createProxyMiddleware({
//     target: "https://mservices.zinghr.com",
//     changeOrigin: true,
//   })
// );

// app.get('/hello', (req, res) => {
//   res.send('Hello HTTPS!');
// });

// const privateKey = fs.readFileSync('./certs/privatekey.pem', 'utf8');
// const certificate = fs.readFileSync('./certs/certificate.pem', 'utf8');
// const ca = fs.readFileSync('./certs/ca_bundle.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate, ca: ca };

// const httpsServer = https.createServer(credentials, app);

// const PORT = process.env.PORT || 3031;
// httpsServer.listen(PORT, () => {
//   console.log(`Proxy server is running on port ${PORT}`);
// });
