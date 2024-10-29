import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { Request, Response } from "express";
import bodyParser from 'body-parser';
@route('/')
export class PhotosController {
    //private todoService: TodoServiceIfs;
    //private requestValidator: RequestValidatorIfs
    constructor() {
        // this.todoService = todoService;
        // this.requestValidator = requestValidator;
    }


    @GET()
    getTodos(req: Request, res: Response) {
        console.log('env ' + process.env.NODE_ENV);
        return res.status(200).json({ data: "OK", status: 200 });
    }
}