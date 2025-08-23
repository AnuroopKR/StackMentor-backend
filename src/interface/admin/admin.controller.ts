import { Request,Response } from "express";
import { CreateExerciseDataUseCase } from "../../application/admin-use-case/createDocument-use-case";
import { ExerciseDataRepositoryImpl } from "../../infrastructure/database/exercise/exerciseData.repository.impl";
import { IExerciseDataRepository } from "../../domain/repositories/exerciseData.repository";


const exerciseRepo:IExerciseDataRepository=new ExerciseDataRepositoryImpl()
const createExerciseDataUseCase=new CreateExerciseDataUseCase(exerciseRepo)


export class ExersiseDataController{
    constructor(
        private createExerciseDataUseCase:CreateExerciseDataUseCase
    ){
        this.createExerciseData=this.createExerciseData.bind(this)
    }

    async createExerciseData(req:Request,res:Response){
        try {
            const {title,data}=req.body
            const result=await this.createExerciseDataUseCase.execute({title,data})
            res.status(200).json({message:"excercise data created"})
        } catch (error) {
            console.log(error)
             res.status(500).json({message:"Internal server error"})
        }
    }
   
}

const exersiseDataController=new ExersiseDataController(createExerciseDataUseCase)
export {exersiseDataController}