   import jwt from 'jsonwebtoken'
   

   const JWT_SECRET="qwertyuio"

   export class JWTsService{
    static generateToken(payload:object,expiresIn:string="2d"):string{
        try {
           return jwt.sign(payload,JWT_SECRET,{expiresIn:expiresIn as jwt.SignOptions["expiresIn"]}) 
        } catch (error) {
            throw Error ("Access Token generate failed")
        }
    }
   }