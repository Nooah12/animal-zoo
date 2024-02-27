import express from "express";
import { Mammals } from "../data/mammalsConstructor.js";

const mammalsRouter = express.Router();

mammalsRouter.get('/', (req, res) => 
    res.render(
        "pages/home", 
        {
            pageTitle: "Mammals",
            animals: Mammals,
            footer: "Not copyrighted 2024"
        }
    )
)

export default mammalsRouter;

