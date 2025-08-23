import { MongodbQuestion } from "../entities/mongodbQuestion.entity";

export type createQuestionProps=Pick<MongodbQuestion,'description'|'queryType'|'sampleData'|'expectedOutput'|'difficulty'>

export interface IMongodbQuestionRepository{
    createQuestion(question:createQuestionProps):Promise<MongodbQuestion>;
    
}