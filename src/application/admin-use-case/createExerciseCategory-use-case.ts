import { ImongodbExerciseCategoryRepository } from "../../domain/repositories/mongodbExerciseCategory.repository";
import { CommonResponse } from "../../infrastructure/dtos/common.dtos";
import { MongodbExerciseCategoryRequest } from "../../infrastructure/dtos/mongodbExrecise.dtos";

export class CreateMongodbExerciseCategoryUseCase {
  constructor(
    private exerciseCategoryRepositiryImpl: ImongodbExerciseCategoryRepository,
  ) {}

  async execute(input: MongodbExerciseCategoryRequest,): Promise<CommonResponse> {
    const { description, title, difficulty, tags } = input;

    const result = await this.exerciseCategoryRepositiryImpl.createCategory({
      description,
      title,
      difficulty,
      tags,
    });
    if(!result){
        return{
            success:false,
            message:"failed to create category"
        }
    }
    return{
        success:true,
        message:"category created"
    }
  }
}
