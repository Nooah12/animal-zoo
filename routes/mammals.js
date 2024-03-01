import express from "express";
import { Mammals } from "../data/constructor.js";
const mammalsRouter = express.Router();

const sidemenu = [
    { name: "Mammals", animals: Mammals.map(animal => animal.name) }
];

mammalsRouter.get('/', (req, res) => {
    res.render("pages/mammals", {
        sidemenu: sidemenu,
        footer: "Not copyrighted 2024",
        urlPath: req.originalUrl
    });
});

mammalsRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    let animalData;

    Mammals.forEach(animal => {
        if (animal.name === animalName) {
            animalData = animal;
        }
    });

    res.render("pages/animal-detailed", {
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        urlPath: req.originalUrl
    })
});

export default mammalsRouter;