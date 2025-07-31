import { IAdminRepository } from "../../domain/repositories/admin.repository";
import { AdminRepositoryImpl } from "../../infrastructure/database/admin/admin.repository.impl";
import {
  LoginRequest,
  registerResponse,
} from "../../infrastructure/dtos/auth.dto";
import { JWTsService } from "../../infrastructure/security/jwtService";
import { PasswordHasher } from "../../infrastructure/security/password_hashing";

export class AdminLoginUseCase {
  constructor(private adminRepositoryImpl: IAdminRepository) {}

  async execute(data: LoginRequest): Promise<registerResponse> {
    const { email, password } = data;
    let admin = await this.adminRepositoryImpl.findAdminByEmail(email);
    console.log("adminLoginUsecase",admin)
    if (!admin) throw new Error("user not exist");
    const ismatched = await PasswordHasher.verifyPassword(
      password,
      admin.password
    );
    if (!ismatched) {
      throw new Error("Invalid credentials");
    }
    const token = JWTsService.generateToken({ adminId: admin._id });
    return { success: true, message: "user loged successfully", authAdmin: {verificationToken: "hsshsjdhjs",
        token: token,} };
  }
}
