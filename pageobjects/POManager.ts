import {NavBar} from './NavBar';
import {Page} from '@playwright/test';

export class POManager{

    page : Page;
    navBar : NavBar;

    constructor(page : Page){
        this.page = page;
        this.navBar = new NavBar(this.page);
    }

    getNavBar(){
        return this.navBar;
    }
}

module.exports = {POManager}