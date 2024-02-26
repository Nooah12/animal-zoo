import express from "express";
const app = express();
const port = 3050;

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.use(express.static("public"));
app.listen(port, console.log(`Listen to ${port}`));