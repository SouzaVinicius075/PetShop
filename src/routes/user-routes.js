import express from "express";
import userController from "../controller/user-controller.js";
const routes = express.Router();

routes
    .post("/create", userController.createUser)


export default routes;