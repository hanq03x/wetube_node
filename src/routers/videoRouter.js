import express from "express";
import {
  watch,
  postEdit,
  getEdit,
  getUpload,
  postUpload,
  getDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

// 순서가 제일 중요합니다!!
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload); //upload를 id로 인식할 수 있음.. => 정규표현식으로 해결!!!
videoRouter.get("/:id([0-9a-f]{24})/delete", getDelete);

export default videoRouter;
