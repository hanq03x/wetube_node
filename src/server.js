import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// 순서가 매우 중요합니다!!
// app.use(routerLogger, methodLogger);
app.use(logger);
app.use(express.urlencoded({ extended: true })); // POST로 받은 내용을 확인할 수 있게 도와줌
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
