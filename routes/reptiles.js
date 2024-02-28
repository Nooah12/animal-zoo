import express from "express";
import { Reptiles } from "../data/constructor.js";

const reptilesRouter = express.Router();

reptilesRouter.get('/', (req, res) => 
    res.render(
        "pages/reptiles", 
        {
            pageTitle: "Reptilessss",
            animals: [{ name: "Reptiles", animals: Reptiles }],
            footer: "Not copyrighted 2024"
        }
    )
)

export default reptilesRouter;