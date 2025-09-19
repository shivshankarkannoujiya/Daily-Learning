import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";

// import Routes
import userRoutes from "./routes/user.route.js"



dotenv.config({
    path: "./.env",
    debug: true
});

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: [`GET`, `POST`, `DELETE`, `PUT`, `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`],
  })
);


// API ROUTES
app.use("/api/v1/users", userRoutes)

const PORT = process.env.PORT ?? 8000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening at port:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`ERROR WHILE CONNECTION TO MONGODB: `, error);
    process.exit(1);
  });