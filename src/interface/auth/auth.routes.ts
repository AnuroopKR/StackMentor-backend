import { Router, Request, Response } from "express";
import { authControllers } from "./auth.controllers";

const router = Router();

router.post("/signup",authControllers.registerAdmin)
router.post("/login",authControllers.adminLogin);

export default router;
