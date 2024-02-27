import express from "express";
import { Mammals, reptilesArray } from "../data/mammalsConstructor.js";

const mammalsRouter = express.Router();

mammalsRouter.get('/', (req, res) => 
    res.render(
        "pages/home", 
        {
            pageTitle: "Reptilessss",
            animals: reptilesArray,
            footer: "Not copyrighted 2024"
        }
    )
)

export default mammalsRouter;