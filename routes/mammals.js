import express from "express";
import { Mammals } from "../data/constructor.js";
const mammalsRouter = express.Router();

export const sidemenu = [
    { name: "Mammals", animals: Mammals.map(animal => animal.name) }
];

mammalsRouter.get('/', (req, res) => 
    res.render("pages/mammals", {
        pageTitle: "Mammals",
        sidemenu: sidemenu,
        animals: [{ name: "Mammals", animals: Mammals }],
        footer: "Not copyrighted 2024",
        summaryType: "detailed"
    })
);

export default mammalsRouter;

