import express from "express";
import petController from "../controller/pet-controller.js"
import validateToken from '../middleware/validate-token.js'
const routes = express.Router();

routes.use(validateToken.validate)
routes.use(validateToken.isAdminUser)
routes
    .post("/create", petController.createPet)
    .patch("/update/:petId", petController.updatePet)
    .delete("/delete", petController.deletePet);

export default routes;