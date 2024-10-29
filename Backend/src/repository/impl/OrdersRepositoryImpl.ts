import { OrderParams } from "../../dtos/OrderParams";
import { OrdersRepository } from "../OrderRepository";
import mysql from 'mysql2/promise';


export class OrdersRepositoryImpl implements OrdersRepository {
    dbConnection : any;
    constructor() {
        
    }
    async createOrder(orderParams: OrderParams): Promise<OrderParams> {
        await this.initConnection();
        let valuesToAdd = `'${orderParams.email}', '${orderParams.fullName}', '${orderParams.userName}' ,'${orderParams.fullAddress}', '${orderParams.colorFrame}', '${orderParams.imageUrls}'`;
        let  insertCommand = `INSERT into orders(email, fullName, userName, fullAddress, colorFrame, imageUrls) VALUES(${valuesToAdd});`;
        console.log('Command : '+insertCommand);
        
        try { 
            const result = await this.dbConnection.execute(insertCommand);
            console.log(`Total rows inserted : ${result.rowCount}`);
            await this.dbConnection.end();
        }
        catch(Err) { 
            console.log(Err);
        }
        
        return orderParams;
    }
    async getOrders(userName : string): Promise<OrderParams[]> {
        await this.initConnection();
        let result : OrderParams [] = [];
        try{
            let query = `select * from orders where userName='${userName}'`;
            console.log('select quesry: '+query);
            let [recordsFromDb] = await this.dbConnection.execute(query);
            this.dbConnection.end();
            result  = recordsFromDb.map(this.GetOrderItemFromRecord);
            return result;
        }
        catch(Err) { 
            console.log(Err);
        }

        return result;
    }

    async initConnection() {
        let configData = {
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME, 
            port : Number(process.env.DB_PORT), 
            connectTimeout: 60000
        }

        try { 
            this.dbConnection = await mysql.createConnection(configData);
        }
        catch(err : any ) {
            console.error('error connecting: ' + err.stack);
            return;
        } 
        console.log('connected OK');     
    }

    private GetOrderItemFromRecord(dbRecord : any) : OrderParams { 
        let result : OrderParams = {
            userName : dbRecord.userName , 
            email : dbRecord.email, 
            fullAddress : dbRecord.fullAddress,
            imageUrls : dbRecord.imageUrls,
            colorFrame : dbRecord.colorFrame,
            fullName : dbRecord.fullName,
        }

        return result;
    }
}




