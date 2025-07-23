

import { Request,Response } from "express"
import { AdminRegisterUseCase } from "../../application/auth-use-case/adminRegister.use-case"
import { AdminRepositoryImpl } from "../../infrastructure/database/admin/admin.repository.impl";

const adminRepo = new AdminRepositoryImpl(); // ✅ instantiate it
const registerAdminUseCase = new AdminRegisterUseCase(adminRepo); // ✅ pass the instance


export class AuthController{
    constructor(
        private registerAdminUseCase:AdminRegisterUseCase
    ){
        this.registerAdmin=this.registerAdmin.bind(this)
    }


async registerAdmin(req:Request,res:Response){
console.log("aaa")
try {
    const {name,email,password}=req.body
          const result = await this.registerAdminUseCase.execute({ name, email, password });
    return res.status(201).json({ message: "Admin registered successfully", data: result });
} catch (error) {
    console.log(error)
          return res.status(500).json({ message: "Internal server error", error });
}
}
}
const authControllers=new AuthController(registerAdminUseCase)
export {authControllers}