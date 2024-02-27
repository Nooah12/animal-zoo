import express from "express";
import birdsRouter from "./routes/birds.js";
import * as path from "path";
import mammalsRouter from "./routes/mammals.js";

const app = express();
const port = 3050;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.render("pages/home", 
    {
        pageTitle: "Zoo",
        footer: "Not copyrighted 2024"
    })
});

app.use('/birds', birdsRouter);
app.use('/mammals', mammalsRouter);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, console.log(`Listen to ${port}`));