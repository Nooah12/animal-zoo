import express from "express";
import { Reptiles } from "../data/constructor.js";
const reptilesRouter = express.Router();

export const sidemenu = [
    { name: "Reptiles", animals: Reptiles.map(animal => animal.name) }
];

reptilesRouter.get('/', (req, res) => {
    res.render("pages/reptiles", {
        pageTitle: "Reptiles",
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        summaryType: "detailed",
        welcome: true
    });
});

reptilesRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    const summaryType = req.query.summary || 'brief';

    let animalData;
    Reptiles.forEach(animal => {
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

    res.render("pages/reptiles", {
        pageTitle: "Reptiles",
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: sumtype,
        welcome: false
    })
});

export default reptilesRouter;