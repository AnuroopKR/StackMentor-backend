
import { ExerciseData } from "../../domain/entities/exerciseData.entity";
import { IExerciseDataRepository } from "../../domain/repositories/exerciseData.repository";

export class GetMongodbExerciseDataUseCase {
  constructor(
    private exerciseCategoryRepository: IExerciseDataRepository
  ) {}

  async execute(): Promise<ExerciseData[]> {
    const data =
      await this.exerciseCategoryRepository.getData();

    return data;
  }
}