import express from "express";
import { loadContainer } from './container';

import dotenv from "dotenv";
import PhotosRoute from "./routes/PhotosRoute";


//import swaggerOutput from "./swagger_output.json";

dotenv.config()

let app_port = process.env.APP_PORT ? process.env.APP_PORT : 3001; 

const app: express.Application = express();
app.use(express.json());
loadContainer(app);

app.use('/api/photos', PhotosRoute);

//app.use(errorHandlerMiddleware);

app.listen(app_port, () => {
    console.log(`Server is running on port ${app_port}`);
});