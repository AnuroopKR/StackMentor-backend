import { ImongodbExerciseCategoryRepository } from
  "../../domain/repositories/mongodbExerciseCategory.repository";
import { MongodbExerciseCategory } from
  "../../domain/entities/mongodbExerciseCategory.entity";

export class GetMongodbExerciseCategoriesUseCase {
  constructor(
    private exerciseCategoryRepository: ImongodbExerciseCategoryRepository
  ) {}

  async execute(): Promise<MongodbExerciseCategory[]> {
    const categories =
      await this.exerciseCategoryRepository.getAllCategories();

    return categories;
  }
}
