/* eslint-disable linebreak-style */
import express from "express";
import loginController from "../controller/loginController.js";

const loginRouter = express.Router();

loginRouter.post("/", loginController.login);

export default loginRouter;
