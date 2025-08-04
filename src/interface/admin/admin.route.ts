import { Router,Request,Response } from "express";
import { exersiseDataController } from "./admin.controller";


const router=Router()
router.post("/create-excercise-data", async (req: Request, res: Response) => {
  await exersiseDataController.createExerciseData(req, res);
});


export default router