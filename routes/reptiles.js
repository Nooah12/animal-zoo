import express from "express";
import { Reptiles } from "../data/constructor.js";
const reptilesRouter = express.Router();

const sidemenu = [
    { name: "Reptiles", animals: Reptiles.map(animal => animal.name) }
];

reptilesRouter.get('/', (req, res) => {
    res.render("pages/reptiles", {
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        summaryType: "Brief",
        welcome: true,
        urlPath: req.originalUrl
    });
});

reptilesRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    let animalData;
    
    Reptiles.forEach(animal => {
        if (animal.name === animalName) {
            animalData = animal;
        }
    });
    res.render("pages/reptiles", {
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: "detailed",
        welcome: false,
        urlPath: req.originalUrl
    })
});

export default reptilesRouter;