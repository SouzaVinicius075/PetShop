import express from "express";
const routes = express.Router();

routes
    .get("/", (req, res) => {
        res.send("Funcionou raiz")
    })
    .get("/teste", (req, res) => {
        res.send("funcionou /teste")
    });

export default routes;