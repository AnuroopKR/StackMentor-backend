import { Admin } from "../../../domain/entities/admin.entity";
import { CreateAdminProps, IAdminRepository } from "../../../domain/repositories/admin.repository";
import { AdminModel, IAdmin } from "./admin.model";

export class AdminRepositoryImpl implements IAdminRepository{
    private mapToEntity(admin:IAdmin):Admin{
        return new Admin(
            admin._id,
            admin.name,
            admin.email,
            admin.password,
            admin.phone,
            admin.isActive,
            // admin.permissions,
            admin.isBlocked,
            admin.createdAt,
            admin.updatedAt,
            admin.profileImage,
        )
    }
    async createAdmin(admin: CreateAdminProps): Promise<Admin> {
        try {
            const createdAdmin = await AdminModel.create(admin);
            return this.mapToEntity(createdAdmin);
        } catch (error) {
            console.log("error : ", error);
            throw new Error("Unable to register, please try again after a few minutes.");
        }
    }
    async findAdminByEmail(email:string):Promise<Admin|null>{
        try {
            const admin=await AdminModel.findOne({email:email})
            return admin?this.mapToEntity(admin):null
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
