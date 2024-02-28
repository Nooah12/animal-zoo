import express from "express";
import { Birds } from "../data/constructor.js";
const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) =>
    res.render("pages/birds", {
        pageTitle: "Birds",
        welcomeMessage: "Welcome to the birdy page",
        animals: [{ name: "Birds", animals: Birds }],
        footer: "Not copyrighted 2024"
}));

export default birdsRouter;