import { CommonResponse } from "./common.dtos";




export interface RegisterRequest{
    name:string;
    email:string;
    password:string;
}
export interface registerResponse extends CommonResponse{
    authAdmin:{
        verificationToken:string;
        token:string;
    }
 

}

export interface LoginRequest{
    email:string;
    password:string;
}