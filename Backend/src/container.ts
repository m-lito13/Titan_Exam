import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { PhotosServiceImpl } from "./services/impl/PhotosServiceImpl";
import { OrdersServiceImpl } from "./services/impl/OrdersServiceImpl";
import { OrdersRepositoryImpl } from "./repository/impl/OrdersRepositoryImpl";
export const loadContainer = (app: Application) => {
    console.log('LOad container called');
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    });
    Container.register({
        photosService : asClass(PhotosServiceImpl).singleton(),
        ordersService : asClass(OrdersServiceImpl).singleton(),
        ordersRepository : asClass(OrdersRepositoryImpl).singleton()
    });
    app.use(scopePerRequest(Container));
}