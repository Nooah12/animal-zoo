import express from "express";
import animalRouter from "./routes/animals.js";
import birdsRouter from "./routes/birds.js";
import mammalsRouter from "./routes/mammals.js";
import reptilesRouter from "./routes/reptiles.js";
import * as path from "path";
import {Birds, Mammals, Reptiles} from "./data/constructor.js";

const app = express();
const port = 3050;
const __dirname = path.resolve();

export const animals = [
    { name: "Birds", animals: Birds },
    { name: "Mammals", animals: Mammals },
    { name: "Reptiles", animals: Reptiles }
];


app.get('/', (req, res) => {
    res.render("pages/home", 
    {
        pageTitle: "Zoo",
        animals: animals,
        activeAnimal: false,
        footer: "Not copyrighted 2024"
    })
});

app.use('/animals', animalRouter);
app.use('/birds', birdsRouter);
app.use('/mammals', mammalsRouter);
app.use('/reptiles', reptilesRouter);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, console.log(`Listen to ${port}`));