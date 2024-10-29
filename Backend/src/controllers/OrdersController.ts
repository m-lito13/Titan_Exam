import { GET, POST, route } from "awilix-express";
import { Request, Response } from "express";
import { OrdersService } from "../services/OrdersService";
import { OrderParams } from "../dtos/OrderParams";
@route('/')
export class OrdersController {
    private ordersService: OrdersService;
    constructor(ordersService : OrdersService) {
        this.ordersService = ordersService;
    }

    @GET()
    async getOrders(req: Request, res: Response)  {
        let userName: string | undefined  = req.query.username?.toString();
        let paramToPass : string = (userName) ? userName :'';
        await this.ordersService.getOrders( paramToPass);
        return res.status(200).json({ data: 'Created', status: 200 });
    }

    @POST()
    async addOrder(req: Request, res: Response) {
        let orderParams = this.GetOrderParamsFromBody(req);
        await this.ordersService.createOrder(orderParams);
        return res.status(200).json({ data: 'Created', status: 200 });
    }

    GetOrderParamsFromBody(req : Request) : OrderParams { 
        let result : OrderParams= {  
            fullAddress: req.body.fullAddress,
            fullName : req.body.fullName, 
            email : req.body.email,
            colorFrame : req.body.frameColor,
            userName : req.body.userName,
            imageUrls : req.body.imageUrls
        }
        return result; 

    }
}