import { CreateMongodbExerciseCategoryUseCase } from "../../application/admin-use-case/createExerciseCategory-use-case";
import { GetMongodbExerciseCategoriesUseCase } from "../../application/admin-use-case/getMongodbExerciseCategory-use-case";
import { ImongodbExerciseCategoryRepository } from "../../domain/repositories/mongodbExerciseCategory.repository";
import { exerciseCategoryRepositoryImpl } from "../../infrastructure/database/exerciseCategory/exerciseCategory.repository.impl";
import { Request, Response } from "express";

const mongodbExerciseCategoryRepo: ImongodbExerciseCategoryRepository =
  new exerciseCategoryRepositoryImpl();
const createMongodbExerciseCategoryUseCase =
  new CreateMongodbExerciseCategoryUseCase(mongodbExerciseCategoryRepo);

  const getMongodbExerciseCategoriesUseCase=new GetMongodbExerciseCategoriesUseCase(mongodbExerciseCategoryRepo)

export class MongoExerciseCategoryController {
  constructor(
    private createMongodbExerciseCategoryUseCase: CreateMongodbExerciseCategoryUseCase,
        private getMongodbExerciseCategoriesUseCase: GetMongodbExerciseCategoriesUseCase

  ) {
    this.createMongodbExerciseCategory =
      this.createMongodbExerciseCategory.bind(this);
      this.getAllCategories=this.getAllCategories.bind(this);


  }

  async createMongodbExerciseCategory(req: Request, res: Response) {
    try {
        console.log(111)
      const { description, title, difficulty, tags } = req.body;
      if (!title || !difficulty) {
        res.status(400).json({ message: "Missing required fields" });
      }

      const result = await this.createMongodbExerciseCategoryUseCase.execute({
        description,
        title,
        difficulty,
        tags,
      });
      res.status(200).json({ message: "category created" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  getAllCategories = async (_req: Request, res: Response) => {
    try {
      const categories = await this.getMongodbExerciseCategoriesUseCase.execute();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };

}

const mongodbExerciseCategoryController = new MongoExerciseCategoryController(
  createMongodbExerciseCategoryUseCase,getMongodbExerciseCategoriesUseCase
);
export { mongodbExerciseCategoryController };
