import express from "express";

const birdsRouter = express.Router();

birdsRouter.get('/', (req, res) => res.render("pages/home", {

}));

export default birdsRouter;