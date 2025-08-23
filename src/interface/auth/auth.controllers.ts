

import { Request,Response } from "express"
import { AdminRegisterUseCase } from "../../application/auth-use-case/adminRegister.use-case"
import { AdminRepositoryImpl } from "../../infrastructure/database/admin/admin.repository.impl";
import { AdminLoginUseCase } from "../../application/auth-use-case/adminLogin.use-case";
import { IAdminRepository } from "../../domain/repositories/admin.repository";

const adminRepo:IAdminRepository = new AdminRepositoryImpl(); // ✅ instantiate it
const registerAdminUseCase = new AdminRegisterUseCase(adminRepo); // ✅ pass the instance
const adminLoginUseCase= new AdminLoginUseCase(adminRepo)

export class AuthController{
    constructor(
        private registerAdminUseCase:AdminRegisterUseCase,
        private adminLoginUseCase:AdminLoginUseCase
    ){
        this.registerAdmin=this.registerAdmin.bind(this)
        this.adminLogin=this.adminLogin.bind(this)
    }


async registerAdmin(req:Request,res:Response){
console.log("aaa")
try {
    const {name,email,password}=req.body
          const result = await this.registerAdminUseCase.execute({ name, email, password });
     res.status(201).json({ message: "Admin registered successfully", data: result });
} catch (error) {
    console.log(error)
           res.status(500).json({ message: "Internal server error", error });
}
}
async adminLogin(req:Request,res:Response){
    try {
        const {email,password}=req.body
         const result=await this.adminLoginUseCase.execute({email,password})

         await res.cookie("ACCESS_TOKEN",result.authAdmin.token,{
            httpOnly:true,
            secure:false,
            maxAge:3600000
         })
          res.status(201).json({success:true,message:result.message})
    } catch (error) {
        console.log("adminLogin",error)
         res.status(500).json({message:"Internal server error",error})
    } 
}
}

const authControllers=new AuthController(registerAdminUseCase,adminLoginUseCase)
export {authControllers}        
 