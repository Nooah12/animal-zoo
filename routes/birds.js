import express from "express";
import { Birds } from "../data/constructor.js";
const birdsRouter = express.Router();

export const sidemenu = [
    { name: "Birds", animals: Birds.map(animal => animal.name) }
];

birdsRouter.get('/', (req, res) =>
    res.render("pages/birds", {
        pageTitle: "Birds",
        sidemenu: sidemenu,
        animals: [{ name: "Birds", animals: Birds }],
        footer: "Not copyrighted 2024",
        summaryType: "detailed"
    })
);

export default birdsRouter;