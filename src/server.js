import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// 순서가 매우 중요합니다!!
// app.use(routerLogger, methodLogger);
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(PORT, () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`)
);

/* 직접 logger를 구현한 것
const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};
*/
