import {NavBar} from './NavBar';
import {LoginPage} from './LoginPage';
import {MyAccountPage} from './MyAccountPage';
import {MyOrdersPage} from './MyOrdersPage';
import {ProductComparisonPage} from './ProductComparisonPage';
import {ProductDetailsPage} from './ProductDetailsPage';
import {ProductListPage} from './ProductListPage';
import {MyWishListPage} from './MyWishListPage';
import {PaymentPage} from './PaymentPage';
import {BrowserContext, Page} from '@playwright/test';

export class POManager {
    private context: BrowserContext;
    private page!: Page;

    private navBar?: NavBar;
    private loginPage?: LoginPage;
    private myAccountPage?: MyAccountPage;
    private myOrdersPage?: MyOrdersPage;
    private productComparisonPage?: ProductComparisonPage;
    private productDetailsPage?: ProductDetailsPage;
    private productListPage?: ProductListPage;
    private myWishListPage?: MyWishListPage;
    private paymentPage?: PaymentPage;

    constructor(context: BrowserContext) {
        this.context = context;
    }

    async init() {
        this.page = await this.context.newPage();
    }

    getPage(): Page {
        return this.page;
    }

    getNavBar(): NavBar {
        if (!this.navBar) {
            this.navBar = new NavBar(this.page);
        }
        return this.navBar;
    }

    getLoginPage(): LoginPage {
        if (!this.loginPage) {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }

    getMyAccountPage(): MyAccountPage {
        if (!this.myAccountPage) {
            this.myAccountPage = new MyAccountPage(this.page);
        }
        return this.myAccountPage;
    }

    getMyOrdersPage(): MyOrdersPage {
        if (!this.myOrdersPage) {
            this.myOrdersPage = new MyOrdersPage(this.page);
        }
        return this.myOrdersPage;
    }

    getProductComparisonPage(): ProductComparisonPage {
        if (!this.productComparisonPage) {
            this.productComparisonPage = new ProductComparisonPage(this.page);
        }
        return this.productComparisonPage;
    }

    getProductDetailsPage(): ProductDetailsPage {
        if (!this.productDetailsPage) {
            this.productDetailsPage = new ProductDetailsPage(this.page);
        }
        return this.productDetailsPage;
    }

    getProductListPage(): ProductListPage {
        if (!this.productListPage) {
            this.productListPage = new ProductListPage(this.page);
        }
        return this.productListPage;
    }

    getMyWishListPage(): MyWishListPage {
        if (!this.myWishListPage) {
            this.myWishListPage = new MyWishListPage(this.page);
        }
        return this.myWishListPage;
    }

    getPaymentPage(): PaymentPage {
        if (!this.paymentPage) {
            this.paymentPage = new PaymentPage(this.page);
        }
        return this.paymentPage;
    }
}