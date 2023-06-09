import express from "express";
import loginController from "../controller/login-controller.js";
const routes = express.Router();

routes
    .post("/login", loginController.loginUser)


export default routes;