
import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"

interface userPayload {
    email:string,
    password:string,
    id:string
}

declare global{
    namespace Express{
       interface Request{
           currentUser:userPayload | null
       }  
    }
}

export const currentUser = function(req:Request,res:Response,next:NextFunction){
  if(req.session?.jwt! == null ||  req.session?.jwt! == undefined){
    req.currentUser = null 
    next()
  }
  const decodeJwt=jwt.verify(req.session?.jwt,process.env.JWTAUTH!) as userPayload
  req.currentUser = decodeJwt 
  next()
  // return res.status(200).send({currentuser:req.currentUser})

}

// Comment 12343
