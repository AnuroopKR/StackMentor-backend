import { Types } from "mongoose";

export class ExerciseData{
    constructor(
        public _id:Types.ObjectId,
        public title: string,
        public data:Record<string,any>,
        public createdAt:Date,
        public tags?:string[]
    ){}
}