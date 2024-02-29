import express from "express";
import {Birds, Mammals, Reptiles} from "../data/constructor.js";
import { sidemenu } from "../index.js";
const homeRouter = express.Router();


export const animals = [
    { name: "Birds", animals: Birds },
    { name: "Mammals", animals: Mammals },
    { name: "Reptiles", animals: Reptiles }
];

homeRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    let animalData;
    animals.forEach(group => {
        group.animals.forEach(animal => {
            if (animal.name === animalName) {
                animalData = animal;
            }
        });
    });

    res.render("pages/animal-brief", {
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        urlPath: req.path,
    });
    
});

export default homeRouter;