import { Request,Response,NextFunction } from "express"
import { InvalidCredentialError } from "../errors/InvalidCredential"

export const Auth = function(req:Request,res:Response,next:NextFunction){
  console.log(req.currentUser)
  // if(req.currentUser == null){
  //     throw new InvalidCredentialError()
  // }
}

