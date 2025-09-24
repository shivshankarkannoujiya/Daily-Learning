import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"


// imoprt custom routes
import userRouter from "./routes/auth.routes.js"

dotenv.config({
    path: "./.env"
})

const app = express()
const PORT =  process.env.PORT ?? 8000

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser())
app.use(cors({
    origin: process.env.BASE_URL
}))

// initialize routes
app.use("/api/v1/users", userRouter)

app.get("/", (_, res) => {
    res
        .status(200)
        .json({
            success: true,
            message: "Test checked"
        })
})

app.listen(PORT, () => {
    console.log(`Server is listening at PORT:${PORT}`)
})