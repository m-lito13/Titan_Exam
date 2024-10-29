import { Exception } from '@tsed/exceptions';
import { Request, Response, NextFunction } from 'express';
export const ErrorHandlerMiddleware = (err : Error, req : Request, res : Response, next : NextFunction) => {
    // Handle the erroryers
    //let statusCode = (err && err. !== 500) ? res.statusCode : 500;
    let statusCode = (err instanceof Exception && err.status  && err.status !== 500) 
                ? err.status 
                : 500;
    let message = (err.message !== '') ? err.message : 'Server Error'
    res.status(statusCode).json({ error: message, code: statusCode });
};