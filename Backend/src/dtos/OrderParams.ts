import { StructuredType } from "typescript";

export interface OrderParams { 
    email : string; 
    fullName : string; 
    fullAddress : string;
    imageUrls : string[];
    colorFrame : string;
    userName : string;
} 