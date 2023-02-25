import express from "express";
import {
  createBlog,
  deleteBlog,
  getAll,
  getOne,
  updateBlog,
} from "../controllers/BlogControlller.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
