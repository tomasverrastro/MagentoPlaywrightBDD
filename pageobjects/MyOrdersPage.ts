import {Locator, Page} from '@playwright/test';
export class MyOrdersPage{

    page : Page;
    ordersTable : Locator;
    orders : Locator;

    constructor(page : Page){
        this.page = page;
        this.ordersTable = page.locator("#my-orders-table");
        this.orders = page.locator("#my-orders-table tbody tr .id");
    }

    async searchOrderId(orderId : any){

        await this.ordersTable.waitFor();
        const ordersCount = await this.orders.count();

        for(let i = 0; i < ordersCount; i++){
            const orderID = await this.orders.nth(i).textContent();

            if(orderId.includes(orderID)){
                return true;
            }
        }

        return false;
    }
}

module.exports = {MyOrdersPage};