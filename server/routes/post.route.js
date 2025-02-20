import express from "express";
import {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisits.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", increaseVisit,getSinglePost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;
