import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

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
