import express from "express";
import { Birds } from "../data/mammalsConstructor.js";

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => res.render("pages/home", {
    pageTitle: "Welcome to the Birds",
    animals: Birds,
    footer: "Not copyrighted 2024",
}));

export default birdsRouter;