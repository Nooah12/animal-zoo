import express from "express";
import { Birds } from "../data/constructor.js";
const birdsRouter = express.Router();

export const sidemenu = [
    { name: "Birds", animals: Birds.map(animal => animal.name) }
];

birdsRouter.get('/', (req, res) => {
    res.render("pages/birds", {
        pageTitle: "Birds",
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        summaryType: "detailed",
        welcome: true
    });
});

birdsRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    const summaryType = req.query.summary || 'brief';

    let animalData;
    Birds.forEach(animal => {
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

    res.render("pages/birds", {
        pageTitle: "Birds",
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: sumtype,
        welcome: false
    })
});

export default birdsRouter;