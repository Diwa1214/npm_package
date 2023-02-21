
import { Request,Response,NextFunction } from "express"
import { InvalidCredentialError } from "../errors/InvalidCredential"
import jwt from "jsonwebtoken"

interface userPayload {
    email:string,
    password:string
}

declare global{
    namespace Express{
       interface Request{
           currentUser:userPayload | null
       }  
    }
}

export const currentUser = function(req:Request,res:Response,next:NextFunction){
  console.log(req?.session)
  // if(req.session?.jwt! == null){
  //   req.currentUser = null 
  //   next()
  // }
  // const decodeJwt = jwt.verify(req.session?.jwt,process.env.JWTAUTH!) as userPayload
  // req.currentUser = decodeJwt 
  // return res.status(200).send({currentuser:req.currentUser})

}