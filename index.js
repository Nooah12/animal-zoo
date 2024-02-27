import express from "express";
import * as path from "path";

const app = express();
const port = 3050;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.render("pages/home", 
    {
        footer: "Not copyrighted 2024"
    })
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, console.log(`Listen to ${port}`));