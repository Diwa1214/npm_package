
import { Request,Response,NextFunction } from "express"
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
  if(req.session?.jwt! == null){
    req.currentUser = null 
    next()
  }
  const decodeJwt=jwt.verify(req.session?.jwt,'jwt-secret') as userPayload
  req.currentUser = decodeJwt 
  return res.status(200).send({currentuser:req.currentUser})

}

// Comment
