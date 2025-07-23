import { Router } from "express";
import { authControllers } from "./auth.controllers";


const router=Router()

router.post("/signup",authControllers.registerAdmin)


export default router