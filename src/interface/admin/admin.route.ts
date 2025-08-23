import { Router,Request,Response } from "express";
import { exersiseDataController } from "./admin.controller";
import { mongodbQuestionController } from "./mongodb-question.controller";


const router=Router()
router.post("/create-excercise-data",exersiseDataController.createExerciseData)
router.post("/create-mongodb-question",mongodbQuestionController.createMongodbQuestions)


export default router