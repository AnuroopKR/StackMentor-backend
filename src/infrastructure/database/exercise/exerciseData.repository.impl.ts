import { ExerciseData } from "../../../domain/entities/exerciseData.entity";
import { createDataProps,IExerciseDataRepository } from "../../../domain/repositories/exerciseData.repository";
import { ExerciseDataModel,IExerciseData } from "./exerciseData.model"


export class ExerciseDataRepositoryImpl implements IExerciseDataRepository{
    private mapToEntity(exerciseData:IExerciseData):ExerciseData{
        return new ExerciseData(
            exerciseData._id,
            exerciseData.title,
            exerciseData.data,
            exerciseData.createdAt,
            exerciseData.tags,
        )
    }
    async createData(exerciseData: createDataProps): Promise<ExerciseData> {
        try {
            const createdData=await ExerciseDataModel.create(exerciseData)
            return this.mapToEntity(createdData)
        } catch (error) {
            console.log("ExerciseDataRepositoryImpl",error)
            throw new Error("unable to create data")
        }
    }
    async findData(id: string): Promise<ExerciseData|null> {
        try {
            const exerciseData=await ExerciseDataModel.findOne({_id:id})
            return exerciseData?this.mapToEntity(exerciseData):null
        } catch (error) {
            console.log("ExerciseDataRepositoryImpl",error)
            return null
        }
    }
}