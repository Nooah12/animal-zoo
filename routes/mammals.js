import express from "express";

const mammalsRouter = express.Router();

mammalsRouter.get('/', (req, res) => res.render("pages/home", {
    pageTitle: "Mammals",
    footer: "Not copyrighted 2024"
}))

export default mammalsRouter;

