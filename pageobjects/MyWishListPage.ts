import {Locator, Page} from '@playwright/test';
export class MyWishListPage{

    page : Page;
    productsTable : Locator;
    products : Locator;

    constructor(page : Page){
        this.page = page;
        this.productsTable = page.locator(".products-grid.wishlist");
        this.products = page.locator(".products-grid.wishlist .product-item-info .product-item-link");
    }

    async searchProduct(product : any){
        await this.productsTable.waitFor();
        const productsCount = await this.products.count();

        for(let i = 0; i < productsCount; i++){
            const productName = await this.products.nth(i).textContent();

            if(product.includes(productName)){
                return true;
            }
        }

        return false;
    }
}

module.exports = {MyWishListPage};