import express from "express";

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => res.render("pages/home", {
    pageTitle: "Birds",
    footer: "Not copyrighted 2024",
}));

export default birdsRouter;