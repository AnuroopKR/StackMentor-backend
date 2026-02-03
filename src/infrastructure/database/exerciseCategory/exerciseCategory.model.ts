import mongoose, { Schema,Document,Types } from "mongoose";

export interface ImongoExerciseCategory extends Document{
    _id:Types.ObjectId;
    description:string;
    title:string;
    createdAt:Date; 
    difficulty:"easy"|"medium"|"hard";
    tags:string[];
}

const MongoExerciseCategorySchema: Schema = new Schema<ImongoExerciseCategory>({

  description: { type: String, required: true },
  title: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true },
  tags: [{ type: String }]
})

export const mongoExerciseCategoryModel=mongoose.model<ImongoExerciseCategory>("mongoExerciseCategory",MongoExerciseCategorySchema)