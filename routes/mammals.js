import express from "express";
import { Mammals } from "../data/constructor.js";
const mammalsRouter = express.Router();

export const sidemenu = [
    { name: "Mammals", animals: Mammals.map(animal => animal.name) }
];

mammalsRouter.get('/', (req, res) => {
    res.render("pages/mammals", {
        pageTitle: "Mammals",
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        summaryType: "detailed",
        welcome: true
    });
});

mammalsRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    const summaryType = req.query.summary || 'brief';

    let animalData;
    Mammals.forEach(animal => {
        if (animal.name === animalName) {
            animalData = animal;
        }
    });

    let template, sumtype;
    if (summaryType === 'detailed') {
        sumtype = "detailed"
    } else {
        sumtype = "brief"
    }

    res.render("pages/mammals", {
        pageTitle: "Mammals",
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: sumtype,
        welcome: false
    })
});

export default mammalsRouter;

