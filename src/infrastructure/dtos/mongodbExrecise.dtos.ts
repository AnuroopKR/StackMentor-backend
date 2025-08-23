import { Types } from "mongoose";
import { CommonResponse } from "./common.dtos";

export interface MongodbQuestionRequest {
  description: string;
  queryType: string;
  sampleData: Types.ObjectId;
  expectedOutput: any;
  difficulty?: "easy" | "medium" | "hard";
//   tags?: string[];
}



export interface MongodbQuestionResponse extends CommonResponse {
  _id: Types.ObjectId;
  description: string;
  queryType: string;
  sampleData: Types.ObjectId;
  expectedOutput: any;
  createdAt: Date;
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
}
