import mongoose,{Schema,Document,Types } from "mongoose";

export interface IMongodbQuestion extends Document{
    _id:Types.ObjectId;
    description:string;
    queryType:string;
    sampleData:Types.ObjectId;
    expectedOutput:any;
    createdAt:Date; 
    difficulty:"easy"|"medium"|"hard";
    tags:string[];
}

const MongodbQuestionSchema: Schema = new Schema<IMongodbQuestion>({
  description: { type: String, required: true },
  queryType: { type: String, required: true },
  sampleData: { type: Schema.Types.ObjectId, ref: "SampleData", required: true },
  expectedOutput:{type:Schema.Types.Mixed},
  createdAt: { type: Date, default: Date.now },
  difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true },
  tags: [{ type: String }]
});

export const MongodbQuestionModel = mongoose.model<IMongodbQuestion>("Question", MongodbQuestionSchema);