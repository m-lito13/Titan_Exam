import { OrderParams } from "../../dtos/OrderParams";
import { OrdersRepository } from "../../repository/OrderRepository";
import { OrdersService } from "../OrdersService";

export class OrdersServiceImpl implements OrdersService {
    ordersRepository : OrdersRepository
    constructor(ordersRepository : OrdersRepository) { 
        this.ordersRepository = ordersRepository;
    }
    async createOrder(orderData: OrderParams): Promise<any> {
        console.log('Create order called');
        return this.ordersRepository.createOrder(orderData);
        
    }
    async getOrders(userName : string): Promise<OrderParams[]> {
        return this.ordersRepository.getOrders(userName);
    } 

}