"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const Auth = function (req, res, next) {
    console.log(req.currentUser);
    // if(req.currentUser == null){
    //     throw new InvalidCredentialError()
    // }
};
exports.Auth = Auth;
