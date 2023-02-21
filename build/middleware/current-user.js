"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const currentUser = function (req, res, next) {
    console.log(req === null || req === void 0 ? void 0 : req.session);
    // if(req.session?.jwt! == null){
    //   req.currentUser = null 
    //   next()
    // }
    // const decodeJwt = jwt.verify(req.session?.jwt,process.env.JWTAUTH!) as userPayload
    // req.currentUser = decodeJwt 
    // return res.status(200).send({currentuser:req.currentUser})
};
exports.currentUser = currentUser;
