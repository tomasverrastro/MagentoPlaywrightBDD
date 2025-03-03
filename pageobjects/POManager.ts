import {NavBar} from './NavBar';
import {LoginPage} from './LoginPage';
import {MyAccountPage} from './MyAccountPage';
import {MyOrdersPage} from './MyOrdersPage';
import {ProductComparisonPage} from './ProductComparisonPage';
import {ProductDetailsPage} from './ProductDetailsPage';
import {ProductListPage} from './ProductListPage';
import {MyWishListPage} from './MyWishListPage';
import {Page} from '@playwright/test';

export class POManager{

    page : Page;
    navBar : NavBar;
    loginPage : LoginPage;
    myAccountPage : MyAccountPage;
    myOrdersPage : MyOrdersPage;
    productComparisonPage : ProductComparisonPage;
    productDetailsPage : ProductDetailsPage;
    productListPage : ProductListPage;
    myWishListPage : MyWishListPage;

    constructor(page : Page){
        this.page = page;
        this.navBar = new NavBar(this.page);
        this.loginPage = new LoginPage(this.page);
        this.myAccountPage = new MyAccountPage(this.page);
        this.myOrdersPage = new MyOrdersPage(this.page);
        this.productComparisonPage = new ProductComparisonPage(this.page);
        this.productDetailsPage = new ProductDetailsPage(this.page);
        this.productListPage = new ProductListPage(this.page);
        this.myWishListPage = new MyWishListPage(this.page);
    }

    getNavBar(){
        return this.navBar;
    }

    getLoginPage(){
        return this.loginPage;
    }

    getMyAccountPage(){
        return this.myAccountPage;
    }

    getMyOrdersPage(){
        return this.myOrdersPage;
    }

    getProductComparisonPage(){
        return this.productComparisonPage;
    }

    getProductDetailsPage(){
        return this.productDetailsPage;
    }

    getProductListPage(){
        return this.productListPage;
    }

    getMyWishListPage(){
        return this.myWishListPage;
    }
}

module.exports = {POManager}