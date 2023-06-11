import express from "express";
import clientController from "../controller/client-controller.js";
import validateToken from '../middleware/validate-token.js'
const routes = express.Router();

routes.use(validateToken.validate)
routes.post("/create", clientController.createClient);




export default routes;