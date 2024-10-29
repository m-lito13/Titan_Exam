import { OrderParams } from "../dtos/OrderParams";

export interface OrdersService { 
    createOrder(orderData: OrderParams) : Promise<any>;
    getOrders(userName : string): Promise<OrderParams[]>;
}