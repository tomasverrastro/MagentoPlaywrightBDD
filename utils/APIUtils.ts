export class APIUtils

{
    apiContext : any;
    loginPayLoad : string;

    constructor(apiContext : any,loginPayLoad : string){
        this.apiContext = apiContext; 
        this.loginPayLoad = loginPayLoad;
    }

    async getToken(){
        const loginResponse =  await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data : this.loginPayLoad
        });
        
        const loginResponseJson = await loginResponse.json();
        const token =loginResponseJson.token;
        console.log(token);
        return token;
    }
}

module.exports = {APIUtils};