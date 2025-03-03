import {Locator, Page} from '@playwright/test';
export class ProductComparisonPage{

    page : Page;
    pageTitle : Locator;
    productsTable : Locator;
    products : Locator;
    btnClearProduct : Locator;
    btnConfirmClear : Locator;
    txtEmptyInfo : Locator;

    constructor(page : Page){
        this.page = page;
        this.pageTitle = page.locator(".base");
        this.productsTable = page.locator("#product-comparison");
        this.products = page.locator("#product-comparison strong a");
        this.btnClearProduct = page.locator(".action.delete");
        this.btnConfirmClear = page.locator(".action-primary.action-accept");
        this.txtEmptyInfo = page.locator(".message.info.empty");
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

    async clearProducts(){

        const buttonsCount = await this.btnClearProduct.count();

        for(let i = buttonsCount; i>=0; i--){
            await this.btnClearProduct.click();
            await this.btnConfirmClear.click();
        }
    }

    async getEmptyInfoText(){
        return this.txtEmptyInfo.textContent();
    }
}

module.exports = {ProductComparisonPage};