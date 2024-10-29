import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { Request, Response } from "express";
import bodyParser from 'body-parser';
import { isConstructorDeclaration } from "typescript";
import { PhotosService } from "../services/PhotosService";
import { PhotoData } from "../services/PhotoData";
@route('/')
export class PhotosController {
    private photosService: PhotosService;
    constructor(photosService : PhotosService) {
        // this.todoService = todoService;
        this.photosService  = photosService;
    }



    @GET()
    async getPhotos(req: Request, res: Response) {
        let num : number = Number(req.query.number);
        console.log('num is '+num);
        let result : PhotoData[] = await this.photosService.getPhotos(num);
        return res.status(200).json({ data: result, status: 200 });
    }
}