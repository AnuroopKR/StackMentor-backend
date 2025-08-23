import { Request,Response } from "express";
import { CreateMongodbQuestionUseCase } from "../../application/admin-use-case/createMongodbQuestion-Use-Case";
import { MongodbQuestionRepositoryImpl } from "../../infrastructure/database/question/mongodbQuestion.repository.impl";
import { IMongodbQuestionRepository } from "../../domain/repositories/mongodbQuestion.repository";


const mongodbQuestionRepo:IMongodbQuestionRepository=new MongodbQuestionRepositoryImpl()
const createMongodbQuestionUseCase=new CreateMongodbQuestionUseCase(mongodbQuestionRepo)

export class MongodbQuestionController{
    constructor(
        private createMongodbQuestionUseCase:CreateMongodbQuestionUseCase
    ){
        this.createMongodbQuestions=this.createMongodbQuestions.bind(this)
    }

 async createMongodbQuestions(req:Request,res:Response){
        try {
            const {description,queryType,sampleData,expectedOutput,difficulty}=req.body
            const result=await this.createMongodbQuestionUseCase.execute({description,queryType,sampleData,expectedOutput,difficulty})
             res.status(200).json({message:"question created successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
        }
    }}


    const mongodbQuestionController=new MongodbQuestionController(createMongodbQuestionUseCase)
    export {mongodbQuestionController}