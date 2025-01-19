import express from "express";
import {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getSinglePost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
