import {Locator, Page} from '@playwright/test';
export class ProductDetailsPage{

    page : Page;
    txtProductDescription : Locator;
    btnProductReviews : Locator;
    txtNickName : Locator;
    txtSummary : Locator;
    txtReview : Locator;
    btnSubmitReview : Locator;

    constructor(page : Page){
        this.page = page;
        this.txtProductDescription = page.locator("div[class='page-wrapper'] p:nth-child(1)");
        this.btnProductReviews = page.locator("#tab-label-reviews-title");
        this.txtNickName = page.locator("#nickname_field");
        this.txtSummary = page.locator("#summary_field");
        this.txtReview = page.locator("#review_field");
        this.btnSubmitReview = page.locator("button:has-Text('Submit Review')");
    }

    async getProductDescription(){
        return await this.txtProductDescription.textContent();
    }

    async clickProductReviewsBtn(){
        await this.btnProductReviews.click();
    }

    async enterNickName(nickName : string){
        await this.txtNickName.fill(nickName);
    }

    async enterSummary(summary : string){
        await this.txtSummary.fill(summary);
    }

    async enterReview(review : string){
        await this.txtReview.fill(review);
    }
   
    async clickSubmitReview(){
        await this.btnSubmitReview.click();
    }

    async rateProduct(stars : number){
        await this.page.locator('#Rating_' + stars + '_label').click();
    }
}

module.exports = {ProductDetailsPage}