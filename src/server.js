import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

/* 직접 logger를 구현한 것
const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};
*/
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};

// 순서가 매우 중요합니다!!
// app.use(routerLogger, methodLogger);
app.use(morgan("dev"));
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
