import { GET, POST, route } from "awilix-express";
import { Request, Response } from "express";
import { OrdersService } from "../services/OrdersService";
import { OrderParams } from "../dtos/OrderParams";
import { OrderRequestValidator } from "../validators/OrderRequestValidator";
import { BadRequest } from "@tsed/exceptions";
@route('/')
export class OrdersController {
    private ordersService: OrdersService;
    private requestValidator: OrderRequestValidator;
    constructor(ordersService : OrdersService, requestValidator : OrderRequestValidator) {
        this.ordersService = ordersService;
        this.requestValidator = requestValidator;
    }

    @GET()
    async getOrders(req: Request, res: Response)  {
        let userName: string | undefined  = req.query.username?.toString();
        if (!userName) { 
            throw new BadRequest('User name was not provied');
        }
        let paramToPass : string = (userName) ? userName :'';
        let serviceResult : OrderParams[] = await this.ordersService.getOrders( paramToPass);
        return res.status(200).json({ data: serviceResult, status: 200 });
    }

    @POST()
    async addOrder(req: Request, res: Response) {
        this.requestValidator.validateOrderRequest(req);
        let orderParams = this.GetOrderParamsFromBody(req);
        let creationResult = await this.ordersService.createOrder(orderParams);
        return res.status(200).json({ data: creationResult, status: 200 });
    }

    private GetOrderParamsFromBody(req : Request) : OrderParams { 
        let result : OrderParams= {  
            fullAddress: req.body.fullAddress,
            fullName : req.body.fullName, 
            email : req.body.email,
            colorFrame : req.body.colorFrame,
            userName : req.body.userName,
            imageUrls : req.body.imageUrls
        }
        return result; 

    }
}