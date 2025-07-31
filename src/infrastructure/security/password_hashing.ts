import bcrypt from "bcryptjs";

export class PasswordHasher {
  static async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new Error("Unexpected error,please try again");
    }
  }
  static async verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw new Error("Unexpected error,please try again");
    }
  }
}
