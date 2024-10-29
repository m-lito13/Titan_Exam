import { loadControllers } from "awilix-express";
import express from "express"; 

let PhotoRoute = express.Router();


PhotoRoute.use(loadControllers(
    '../controllers/Photo*.*s',
    { cwd: __dirname }
));

export default PhotoRoute;  