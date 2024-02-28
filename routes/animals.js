import express from "express";
import { animals } from '../index.js';
const animalRouter = express.Router();

animalRouter.get('/:name', (req, res) => {
    const animalName = req.params.name;
    let animalData;
    animals.forEach(group => {
        group.animals.forEach(animal => {
            if (animal.name === animalName) {
                animalData = animal;
            }
        });
});

    if(animalData) {
        res.json(animalData);
    } else {
        res.status(404).json({ error: 'Animal not found' });
    }
});

export default animalRouter;
