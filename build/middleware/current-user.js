"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const currentUser = function (req, res, next) {
    var _a, _b, _c;
    if (((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt) == null || ((_b = req.session) === null || _b === void 0 ? void 0 : _b.jwt) == undefined) {
        req.currentUser = null;
        next();
    }
    const decodeJwt = jsonwebtoken_1.default.verify((_c = req.session) === null || _c === void 0 ? void 0 : _c.jwt, process.env.JWTAUTH);
    req.currentUser = decodeJwt;
    next();
    // return res.status(200).send({currentuser:req.currentUser})
};
exports.currentUser = currentUser;
// Comment
