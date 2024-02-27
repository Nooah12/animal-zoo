import express from "express";

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => res.render("pages/home", {
    pageTitle: "This is the birds page",
    footer: "Not copyrighted 2024",
}));

export default birdsRouter;