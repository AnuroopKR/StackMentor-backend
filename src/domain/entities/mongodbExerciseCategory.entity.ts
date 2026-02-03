import { Types } from "mongoose";

export class MongodbExerciseCategory{
    constructor(
        public readonly _id:Types.ObjectId,
        public title:string,
        public description:string,
        public createdAt:Date,
        public difficulty?: "easy" | "medium" | "hard",
        public tags?:string[],

    ){}
}