import { Types } from "mongoose";
import { Admin } from "../entities/admin.entity";

export type CreateAdminProps=Pick<Admin,"name"|"email"|"password">

export interface IAdminRepository{

    createAdmin(admin:CreateAdminProps):Promise<Admin>;
    findAdminByEmail(email: string): Promise<Admin | null>;
}