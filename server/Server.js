import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/Mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4040;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("MMM-api"));

app.listen(PORT, () => console.log("Server Running on Port " + PORT));
