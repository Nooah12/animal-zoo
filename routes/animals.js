import express from "express";
import { sidemenu } from '../index.js';
import {Birds, Mammals, Reptiles} from "../data/constructor.js";
const animalRouter = express.Router();

export const animals = [
    { name: "Birds", animals: Birds },
    { name: "Mammals", animals: Mammals },
    { name: "Reptiles", animals: Reptiles }
];

animalRouter.get('/animals/:name', (req, res) => {
    const animalName = req.params.name;
    const summaryType = req.query.summary || 'brief';
    
    let animalData;
    animals.forEach(group => {
        group.animals.forEach(animal => {
            if (animal.name === animalName) {
                animalData = animal;
            }
        });
    });

    let template, sumtype;
    if (summaryType === 'detailed') {
        template = 'pages/animal-detailed';
        sumtype = "detailed"
    } else {
        template = 'pages/animal-brief';
        sumtype = "brief"
    }
    

    res.render(template, {
        pageTitle: animalName,
        sidemenu: sidemenu,
        animal: animalData,
        footer: "Not copyrighted 2024",
        summaryType: sumtype
    });
    
});

export default animalRouter;
