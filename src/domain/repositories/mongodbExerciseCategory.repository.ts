import { MongodbExerciseCategory } from "../entities/mongodbExerciseCategory.entity";

export type createExerciseCategoryProps=Pick<MongodbExerciseCategory,"title"|"description"|"difficulty"|"tags">;

export interface ImongodbExerciseCategoryRepository{
    createCategory(mongodbExerciseCategory:createExerciseCategoryProps):Promise<MongodbExerciseCategory>
    getAllCategories():Promise<MongodbExerciseCategory[]>
}