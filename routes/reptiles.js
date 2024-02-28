import express from "express";
import { Reptiles } from "../data/Constructor.js";

const reptilesRouter = express.Router();

reptilesRouter.get('/', (req, res) => 
    res.render(
        "pages/home", 
        {
            pageTitle: "Reptilessss",
            animals: Reptiles,
            footer: "Not copyrighted 2024"
        }
    )
)

export default reptilesRouter;