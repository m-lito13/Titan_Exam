import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { PhotosService } from "../services/PhotosService";
import { PhotoData } from "../services/PhotoData";
import { BadRequest } from "@tsed/exceptions";
@route('/')
export class PhotosController {
    private photosService: PhotosService;
    constructor(photosService : PhotosService) {
        this.photosService  = photosService;
    }

    @GET()
    async getPhotos(req: Request, res: Response) {
        let num : number = Number(req.query.number);
        if (!num) { 
            throw new BadRequest('Number of photos not provided');
        }
        let result : PhotoData[] = await this.photosService.getPhotos(num);
        return res.status(200).json({ data: result, status: 200 });
    }
}