import { PhotoData } from "../PhotoData";
import { PhotosService } from "../PhotosService";

const PHOTOS_URL_BASE = 'https://pixabay.com/api';
const API_KEY = '45640711-3b2c9c3e0dd9ac6e6a5b798be';

export class PhotosServiceImpl implements PhotosService {
    async getPhotos(numberOfPhotos: number) : Promise<PhotoData[]> {
        let result = await this.getPhotosInternal(numberOfPhotos);
        return result;
    } 

    async getPhotosInternal(numberOfPhotos : number) : Promise<PhotoData[]> { 
        let urlString = `${PHOTOS_URL_BASE}/?key=${API_KEY}`;
        console.log(urlString);
        let response = await fetch(urlString);
        let picData = await response.json();
        console.log(picData);
        let resultAll : PhotoData[] = picData.hits.map((item:any) => ( {userImageURL : item.userImageURL, largeImageURL : item.largeImageURL, previewURL: item.previewURL}));
        let result : PhotoData[] = resultAll.slice(0, numberOfPhotos);
        console.log(result);
        return result;
    }
    
}