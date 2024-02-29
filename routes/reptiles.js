import express from "express";
import { Reptiles } from "../data/constructor.js";
const reptilesRouter = express.Router();

export const sidemenu = [
    { name: "Reptiles", animals: Reptiles.map(animal => animal.name) }
];

reptilesRouter.get('/', (req, res) => 
    res.render("pages/reptiles", {
        pageTitle: "Reptilessss",
        sidemenu: sidemenu,
        animals: [{ name: "Reptiles", animals: Reptiles }],
        footer: "Not copyrighted 2024",
        summaryType: "detailed"
    })
);

export default reptilesRouter;