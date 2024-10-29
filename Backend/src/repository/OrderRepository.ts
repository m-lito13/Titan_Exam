import { OrderParams } from "../dtos/OrderParams";

export interface OrdersRepository { 
    createOrder(orderParams : OrderParams) : Promise<any>;
    getOrders(userName : string): Promise<OrderParams[]>;
}