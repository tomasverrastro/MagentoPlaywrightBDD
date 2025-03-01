import {test, expect, Locator, Page} from '@playwright/test';
export class NavBar{
    
    page : Page;
    signInBtn : Locator;
    accountDrop : Locator;
    myAccountBtn : Locator;
    myWishListBtn : Locator;
    signOutBtn : Locator;
    productSearchBox : Locator;
    cartBtn : Locator;
    womenBtn : Locator;
    menBtn : Locator;
    gearBtn : Locator;
    womenTopsBtn : Locator;
    womenBottomsBtn : Locator;
    womenJacketsBtn : Locator;
    womenHoodiesBtn : Locator;
    womenTeesBtn : Locator;
    womenPantsBtn : Locator;
    womenShortsBtn : Locator;
    menTopsBtn : Locator;
    menBottomsBtn : Locator;
    menJacketsBtn : Locator;
    menHoodiesBtn : Locator;
    menTeesBtn : Locator;
    menTanksBtn : Locator;
    menPantsBtn : Locator;
    menShortsBtn : Locator;
    gearBagsBtn : Locator;
    gearFitnessBtn : Locator;
    gearWatchesBtn : Locator;
  

   
    constructor(page : Page){

        this.page = page;
        this.signInBtn = page.locator("a:has-text('Sign In'):visible"); 
        this.accountDrop = page.locator("button:has-text('Change'):visible");
        this.myAccountBtn = page.locator("a[href='https://magento.softwaretestingboard.com/customer/account/']:visible");
        this.myWishListBtn = page.locator("a[href='https://magento.softwaretestingboard.com/wishlist/']:visible");
        this.signOutBtn = page.locator("a[href='https://magento.softwaretestingboard.com/customer/account/logout/']:visible");
        this.productSearchBox = page.locator("#search");
        this.cartBtn = page.locator("a[href='https://magento.softwaretestingboard.com/checkout/cart/']");
        this.womenBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women.html']");
        this.menBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men.html']");
        this.gearBtn = page.locator("a[href='https://magento.softwaretestingboard.com/gear.html']");
        this.womenTopsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/tops-women.html']");
        this.womenBottomsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/bottoms-women.html']");
        this.womenJacketsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/jackets-women.html']");
        this.womenHoodiesBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/tops-women/hoodies-and-sweatshirts-women.html']");
        this.womenTeesBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/tops-women/tees-women.html']");
        this.womenPantsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html']");
        this.womenShortsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html']");
        this.menTopsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/tops-men.html']");
        this.menBottomsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/bottoms-men.html']");
        this.menJacketsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html']");
        this.menHoodiesBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html']");
        this.menTeesBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/tops-men/tees-men.html']");
        this.menTanksBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html']");
        this.menPantsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html']");
        this.menShortsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html']");
        this.gearBagsBtn = page.locator("a[href='https://magento.softwaretestingboard.com/gear/bags.html']");
        this.gearFitnessBtn = page.locator("a[href='https://magento.softwaretestingboard.com/gear/fitness-equipment.html']");
        this.gearWatchesBtn = page.locator("a[href='https://magento.softwaretestingboard.com/gear/watches.html']");
    }
    
    async clickSignInBtn(){
        await this.signInBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickAccountDropBtn(){
        await this.accountDrop.click();
    }

    async clickMyAccountBtn(){
        await this.myAccountBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickMyWishlistBtn(){
        await this.myWishListBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickLogoutBtn(){
        await this.signOutBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async searchProduct(product : string){
        await this.productSearchBox.fill(product);
    }

    async clickCartBtn(){
        await this.cartBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async hoverWomenBtn(){
        await this.womenBtn.hover();
    }

    async hoverWomenTopsBtn(){
        await this.womenTopsBtn.hover();
    }

    async clickWomenTopsBtn(){
        await this.womenTopsBtn.click();
    }

    async hoverWomenBottomsBtn(){
        await this.womenBottomsBtn.hover();
    }

    async clickWomenBottomsBtn(){
        await this.womenBottomsBtn.click();
    }

    async clickWomenJacketsBtn(){
        await this.womenJacketsBtn.click();
    }

    async clickWomenHoodiesBtn(){
        await this.womenHoodiesBtn.click();
    }

    async clickWomenTeesBtn(){
        await this.womenTeesBtn.click();
    }

    async clickWomenPantsBtn(){
        await this.womenPantsBtn.click();
    }

    async clickWomenShortsBtn(){
        await this.womenShortsBtn.click();
    }

    async hoverMenBtn(){
        await this.menBtn.hover();
    }

    async hoverMenTopsBtn(){
        await this.menTopsBtn.hover();
    }

    async clickMenTopsBtn(){
        await this.menTopsBtn.click();
    }

    async hoverMenBottomBtn(){
        await this.menBottomsBtn.hover();
    }

    async clickMenBottomBtn(){
        await this.menBottomsBtn.click();
    }

    async clickMenJacketsBtn(){
        await this.menJacketsBtn.click();
    }

    async clickMenTeesBtn(){
        await this.menTeesBtn.click();
    }

    async clickMenTanksBtn(){
        await this.menTanksBtn.click();
    }

    async clickMenPantsBtn(){
        await this.menPantsBtn.click();
    }

    async clickMenHoodiesBtn(){
        await this.menHoodiesBtn.click();
    }

    async clickMenShortsBtn(){
        await this.menShortsBtn.click();
    }

    async hoverGearBtn(){
        await this.gearBtn.click();
    }

    async clickGearBagsBtn(){
        await this.gearBagsBtn.click();
    }

    async clickGearFitnessBtn(){
        await this.gearFitnessBtn.click();
    }

    async clickGearWatchesBtn(){
        await this.gearWatchesBtn.click();
    }

    async goTo(){
    await this.page.goto("https://magento.softwaretestingboard.com/");
    }
}

module.exports = {NavBar};