import express from "express"

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get("/api", async (_, res) => {
    return res
        .status(200)
        .json({
            success: true,
            message: "Welcome to Chaicode from Backend"
        })
})


app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`);
}) 