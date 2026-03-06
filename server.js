import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/db/Connect.js";
import taskRoutes from "./src/routes/taskRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api", taskRoutes);

app.get("/", (req, res) => {
res.send("TaskFlow API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running on port", PORT);
});