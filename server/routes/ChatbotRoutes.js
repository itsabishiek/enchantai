import express from "express";
import { chatResponse, getModels } from "../controllers/ChatbotController.js";

const router = express.Router();

router.post("/", chatResponse);
router.get("/models", getModels);

export default router;
