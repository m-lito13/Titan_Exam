import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { PhotosServiceImpl } from "./services/impl/PhotosServiceImpl";
//import TodoService  from "./services/impl/todoservice";
//import TodoFileRepository from "./services/impl/todofilerepository";
//import { RequestValidator } from "./services/impl/requestValidator";
export const loadContainer = (app: Application) => {
    console.log('LOad container called');
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    });
    Container.register({
        photosService : asClass(PhotosServiceImpl).singleton(),
    });
    app.use(scopePerRequest(Container));
}