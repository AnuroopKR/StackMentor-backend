import { Router } from "express";
import { exersiseDataController } from "./admin.controller";
import { mongodbQuestionController } from "./mongodb-question.controller";
import { mongodbExerciseCategoryController } from "./mongodbExerciseCategory.controller";


const router=Router()
router.post("/create-excercise-data",exersiseDataController.createExerciseData)
router.post("/create-mongodb-question",mongodbQuestionController.createMongodbQuestions)
router.post(
  "/create-category",
  mongodbExerciseCategoryController.createMongodbExerciseCategory
);
router.get(
  "/get-category",
  mongodbExerciseCategoryController.getAllCategories
);
export default router