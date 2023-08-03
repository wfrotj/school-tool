import express from "express";
import teacherController from "../controller/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.post("/", teacherController.createTeacher);

teacherRouter.get("/", teacherController.getAllTeachers);

export default teacherRouter;
