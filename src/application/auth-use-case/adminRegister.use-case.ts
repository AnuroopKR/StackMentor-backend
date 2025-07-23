

import { error } from "console";
import { AdminRepositoryImpl } from "../../infrastructure/database/admin/admin.repository.impl";
import { RegisterRequest, registerResponse } from "../../infrastructure/dtos/auth.dto";
import { CommonResponse } from "../../infrastructure/dtos/common.dtos";
import { PasswordHasher } from "../../infrastructure/security/password_hashing";

export class AdminRegisterUseCase{
    constructor( private adminRepositoryImpl:AdminRepositoryImpl){}

    async execute (data:RegisterRequest):Promise<CommonResponse>{

        const { name, email, password } = data;
            
        let admin=await this.adminRepositoryImpl.findAdminByEmail(email)
        if(admin) throw new Error("user alredy exist")

            const hashedPassword=await PasswordHasher.hashPassword(password)

            await this.adminRepositoryImpl.createAdmin({
                name:name,
                email:email,
                password:hashedPassword
            })
            return {success:true,message:"admin created"}
    }
}