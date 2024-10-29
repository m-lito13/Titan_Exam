import { PhotoData } from "../PhotoData";
import { PhotosService } from "../PhotosService";


export class PhotosServiceImpl implements PhotosService {
    async getPhotos(numberOfPhotos: number): Promise<PhotoData[]> {
        let result = await this.getPhotosInternal(numberOfPhotos);
        return result;
    }

    async getPhotosInternal(numberOfPhotos: number): Promise<PhotoData[]> {
        try {
            let urlString = `${process.env.PIC_API_URL}/?key=${process.env.API_KEY}`;
            let response = await fetch(urlString);
            let picData = await response.json();
            let resultAll: PhotoData[] = picData.hits.map((item: any) => ({ 
                userImageURL: item.userImageURL, 
                largeImageURL: item.largeImageURL, 
                previewURL: item.previewURL 
            }));
            let result: PhotoData[] = resultAll.slice(0, numberOfPhotos);
            return result;
        }
        catch(Err) { 
            console.error('Error calling external API : ' + Err);
            throw Err;
        }
        
    }

}