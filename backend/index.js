import express from 'express'
import connectDB from './database/db.js'
import authRoute from "./routes/userRoute.js"

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World MERN App.")
})

app.use("/api/auth", authRoute)

connectDB()

app.listen(4000, () => {
    console.log("Server started on port 4000")
})