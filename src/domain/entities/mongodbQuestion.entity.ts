import { Types } from "mongoose";

export class MongodbQuestion{
    constructor(
        public readonly _id:Types.ObjectId,
        public description:string,
        public queryType:string,
        public sampleData:Types.ObjectId,
        public expectedOutput:any,
        public createdAt:Date,
        public difficulty?: "easy" | "medium" | "hard",
        public tags?:string[],

    ){}
}