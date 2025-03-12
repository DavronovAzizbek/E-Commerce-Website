import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createCategory, uploadImages } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/uploadImages", auth, upload.array("images"), uploadImages);
categoryRouter.post("/create", auth, createCategory)

export default categoryRouter;
