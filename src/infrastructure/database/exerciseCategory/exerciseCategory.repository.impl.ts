import { MongodbExerciseCategory } from "../../../domain/entities/mongodbExerciseCategory.entity";
import {
  createExerciseCategoryProps,
  ImongodbExerciseCategoryRepository,
} from "../../../domain/repositories/mongodbExerciseCategory.repository";
import {
  ImongoExerciseCategory,
  mongoExerciseCategoryModel,
} from "./exerciseCategory.model";

export class exerciseCategoryRepositoryImpl implements ImongodbExerciseCategoryRepository {
  private mapToEntity(
    mongoExerciseCategory: ImongoExerciseCategory,
  ): MongodbExerciseCategory {
    return new MongodbExerciseCategory(
      mongoExerciseCategory._id,
      mongoExerciseCategory.title,
      mongoExerciseCategory.description,
      mongoExerciseCategory.createdAt,
      mongoExerciseCategory.difficulty,
      mongoExerciseCategory.tags,
    );
  }
  async createCategory(
    mongoExerciseCategory: createExerciseCategoryProps,
  ): Promise<MongodbExerciseCategory> {
    try {
      const createCategory = await mongoExerciseCategoryModel.create(
        mongoExerciseCategory,
      );
      return this.mapToEntity(createCategory);
    } catch (error) {
      console.log("ExerciseDataRepositoryImpl", error);
      throw new Error("unable to create data");
    }
  }
  async getAllCategories(): Promise<MongodbExerciseCategory[]> {
    try {
      const categories = await mongoExerciseCategoryModel.find();

      return categories.map((category) => this.mapToEntity(category));
    } catch (error) {
      throw new Error("Unable to fetch exercise categories");
    }
  }
}
