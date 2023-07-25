import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import teacherRouter from "./routes/teacherRouter.js";

const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Connected to DB");
};

connectToDB(config.MONGODB);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/teacher", teacherRouter);

export default app;
