import express from "express";

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => res.render("pages/home", {
    pageTitle: "This is the birds page",
    footer: ""
}));

export default birdsRouter;