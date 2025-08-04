import { IExerciseDataRepository } from "../../domain/repositories/exerciseData.repository";
import { CommonResponse } from "../../infrastructure/dtos/common.dtos";

export class CreateExerciseDataUseCase {
  constructor(private exerciseDataRepositoryImpl: IExerciseDataRepository) {}

  async execute(input: any): Promise<CommonResponse> {
    const { title, data } = input;
    let result = await this.exerciseDataRepositoryImpl.createData({
      title,
      data,
    });

    if (!result) {
      return {
        success: false,
        message: "Failed to create exercise data",
      };
    }

    return {
      success: true,
      message: "excercise data created",
    };
  }
}
