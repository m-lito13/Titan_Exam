import { loadControllers } from "awilix-express";
import express from "express"; 

let OrdersRoute = express.Router();


OrdersRoute.use(loadControllers(
    '../controllers/Order*.*s',
    { cwd: __dirname }
));

export default OrdersRoute;  