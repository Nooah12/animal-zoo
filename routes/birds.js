import express from "express";
import { Birds } from "../data/constructor.js";
const birdsRouter = express.Router();

const sidemenu = [
    { name: "Birds", animals: Birds.map(animal => animal.name) }
];

birdsRouter.get('/', (req, res) => {
    res.render("pages/birds", {
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        summaryType: "Brief",
        welcome: true,
        urlPath: req.originalUrl
    });
});

birdsRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    let animalData;

    Birds.forEach(animal => {
        if (animal.name === animalName) {
            animalData = animal;
        }
    });
  
    res.render("pages/birds", {
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: "detailed",
        welcome: false,
        urlPath: req.originalUrl
    })
});

export default birdsRouter;