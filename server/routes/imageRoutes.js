import express from "express";
import { generateImage } from "../controllers/imageController.js";
import userAuth from "../middleware/auth.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generateImage);

export default imageRouter;

// http://localhost:4040/api/image/generate-image