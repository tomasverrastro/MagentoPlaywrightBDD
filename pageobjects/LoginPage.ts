import {Locator, Page} from '@playwright/test';
export class LoginPage{

    page : Page;
    txtEmail : Locator;
    txtPassword : Locator;
    btnSignIn : Locator;
    

    constructor(page : Page){

        this.page = page;
        this.txtEmail = page.locator('#email');
        this.txtPassword = page.locator('input[name="login[password]"]');
        this.btnSignIn = page.locator("button:has-text('Sign In'):visible");
    }

    async enterEmail(email : string){
        await this.txtEmail.fill(email);
    }

    async enterPassword(password : string){
        await this.txtPassword.fill(password);
    }

    async clickSignInBtn(){
        await this.btnSignIn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage};