import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})

export default app;
