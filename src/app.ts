import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRouter from "./interface/auth/auth.routes"
import adminRouter from "./interface/admin/admin.route"

dotenv.config()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/api/auth",authRouter)
app.use("/api/admin",adminRouter)


export default app