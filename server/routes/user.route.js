import express from "express";
import { getUserSavedPosts, savePost } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/saved-posts", getUserSavedPosts);
router.patch("/save-post", savePost);

export default router;
