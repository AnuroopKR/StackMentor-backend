import { Router, Request, Response } from "express";
import { authControllers } from "./auth.controllers";

const router = Router();

router.post("/signup", async (req: Request, res: Response) => {
  await authControllers.registerAdmin(req, res);
});

router.post("/login", async (req: Request, res: Response) => {
  await authControllers.adminLogin(req, res);
});
// router.post("/login",authControllers.adminLogin);

export default router;
