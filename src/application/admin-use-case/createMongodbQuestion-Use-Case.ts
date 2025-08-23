import { IMongodbQuestionRepository } from "../../domain/repositories/mongodbQuestion.repository";
import { CommonResponse } from "../../infrastructure/dtos/common.dtos";
import { MongodbQuestionRequest } from "../../infrastructure/dtos/mongodbExrecise.dtos";

export class CreateMongodbQuestionUseCase{
    constructor(private mongodbQuestionRepositoryImpl:IMongodbQuestionRepository){}

    async execute(input:MongodbQuestionRequest):Promise<CommonResponse>{
        const {description,queryType,sampleData,expectedOutput,difficulty}=input
        const result=await this.mongodbQuestionRepositoryImpl.createQuestion({
            description,
            queryType,
            sampleData,
            expectedOutput,
            difficulty
        })

        if (!result){
            return{
                success:false,
                message:"Failed to create question"
            }
        }

        return{success:true,
            message:'Question created'
        }
    }
}