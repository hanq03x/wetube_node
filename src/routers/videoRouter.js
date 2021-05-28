import express from "express";
import { edit, deleteVid, upload, watch } from "../controllers/videoController";

const videoRouter = express.Router();

// 순서가 제일 중요합니다!!
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVid);
videoRouter.get("/upload", upload); //upload를 id로 인식할 수 있음.. => 정규표현식으로 해결!!!

export default videoRouter;
