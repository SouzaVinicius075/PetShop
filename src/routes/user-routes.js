import express from "express";
import userController from "../controller/user-controller.js";
import validateToken from '../middleware/validate-token.js'
const routes = express.Router();

routes.post("/create", userController.createUser);

routes.use(validateToken.validacaoToken)
routes
    .patch("/update", userController.updateUser)


export default routes;