import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import ChatbotRoutes from "./routes/ChatbotRoutes.js";
import GenerateImageRoutes from "./routes/GenerateImageRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from BotGPT 👋",
  });
});

app.use("/api/chatbot", ChatbotRoutes);
app.use("/api", GenerateImageRoutes);

app.listen(PORT, () => {
  console.log(`AI server started on http://localhost:${PORT}`);
});
