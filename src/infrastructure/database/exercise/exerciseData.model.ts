import mongoose, { Schema,Document,Types } from "mongoose";

export interface IExerciseData extends Document{
    _id:Types.ObjectId;
    title:string;
    data:Record<string,any>;
    tags?:string[];
    createdAt:Date;
}

const exerciseDataSchema=new Schema<IExerciseData>({
    title:{type:String,required:true},
    data:{type:Schema.Types.Mixed,required:true},
    tags:[{type:String}],
    createdAt:{type:Date,default:Date.now}
})

export const ExerciseDataModel=mongoose.model<IExerciseData>("exerciseData",exerciseDataSchema)