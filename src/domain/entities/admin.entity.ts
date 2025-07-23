import { Types } from "mongoose";

export class Admin{
    constructor(
        public _id:Types.ObjectId,
        public name:string,
        public email:string,
        public password:string,
        public phone:string,
        public isActive: boolean = true,
        // public permissions?: string[],
        public isBlocked:boolean,
        public createdAt: Date,
        public updatedAt: Date,
        public profileImage?: string,
        public lastLoginAt?: Date,
        
    ){
        
    }
}