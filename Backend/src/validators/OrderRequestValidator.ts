import { Request } from 'express';
export interface OrderRequestValidator { 
    validateOrderRequest(req: Request)
}