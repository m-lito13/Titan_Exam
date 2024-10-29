import { Request } from "express";
import { OrderRequestValidator } from "../OrderRequestValidator";
import { BadRequest } from "@tsed/exceptions";

const EMAIL_FIELD : string = 'email';
const FULLADDRESS_FIELD : string = 'fullAddress';
const FULLNAME_FIELD : string = 'fullName';
const COLORFRAME_FIELD : string = 'colorFrame';
const IMAGE_URLS_FIELD : string = 'imageUrls';
const USERNAME_FIELD : string = 'userName'; 
const TOTAL_FIELDS : number = 6;

export class OrderRequestValidatorImpl implements OrderRequestValidator {
    validateOrderRequest(req: Request) {
        let isValid = ((EMAIL_FIELD in req.body) 
            && (USERNAME_FIELD in req.body) 
            && (FULLADDRESS_FIELD in req.body) 
            && (FULLNAME_FIELD in req.body) 
            && (IMAGE_URLS_FIELD in req.body) 
            && (COLORFRAME_FIELD in req.body) 
            && (TOTAL_FIELDS === 6));

        if (!isValid) { 
            throw new BadRequest('Missing or invalid fields provided for order request');
        }
    } 
}