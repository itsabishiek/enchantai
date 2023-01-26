import express from "express";
import {
  generateImage,
  generateImageVariations,
} from "../controllers/GenerateImageController.js";

const router = express.Router();

router.post("/generateImage", generateImage);
router.post("/generateImageVariations", generateImageVariations);

export default router;
