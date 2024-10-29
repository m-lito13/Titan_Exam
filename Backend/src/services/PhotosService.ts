import { PhotoData } from "./PhotoData";

export interface PhotosService { 
    getPhotos(numberOfPhotos : number) : Promise<PhotoData[]>;
}