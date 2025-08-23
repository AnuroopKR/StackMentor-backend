import { MongodbQuestion } from "../../../domain/entities/mongodbQuestion.entity";
import { createQuestionProps, IMongodbQuestionRepository } from "../../../domain/repositories/mongodbQuestion.repository";
import { IMongodbQuestion, MongodbQuestionModel } from "./mongodbQuestion.model";


export class MongodbQuestionRepositoryImpl implements IMongodbQuestionRepository {
  
  private mapToEntity(question: IMongodbQuestion): MongodbQuestion {
    return new MongodbQuestion(
      question._id,
      question.description,
      question.queryType,
      question.sampleData,
      question.expectedOutput,
      question.createdAt,
      question.difficulty,
      question.tags
    );
  }

  async createQuestion(question: createQuestionProps): Promise<MongodbQuestion> {
    try {
      const createdQuestion = await MongodbQuestionModel.create(question);
      return this.mapToEntity(createdQuestion);
    } catch (error) {
      console.error("QuestionRepositoryImpl Error:", error);
      throw new Error("Unable to create question");
    }
  }
}