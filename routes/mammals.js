import express from "express";
import { Mammals } from "../data/constructor.js";

const mammalsRouter = express.Router();

mammalsRouter.get('/', (req, res) => 
    res.render(
        "pages/mammals", 
        {
            pageTitle: "Mammals",
            animals: [{ name: "Mammals", animals: Mammals }],
            footer: "Not copyrighted 2024"
        }
    )
)

export default mammalsRouter;

