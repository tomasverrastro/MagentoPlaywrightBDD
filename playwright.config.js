// @ts-check
const { devices } = require('@playwright/test');

const config = {
   testDir: './tests',
   //Maximum time one test can run for.
   timeout: 30 * 1000,
   expect: {

    timeout: 5000
   },

   reporter: 'html',
   //Shared settings for all the projects below.
   projects : [
      {
        name : 'safari',
        use: {
  
          browserName : 'webkit',
          headless : true,
          screenshot : 'off',
          trace : 'on',//off,on 
          ...devices['iPhone 11'],    
        }
  
      },
      {
        name : 'chrome',
        use: {
  
          browserName : 'chromium',
          headless : false,
          screenshot : 'on',
          video: 'retain-on-failure',
          trace : 'on',
          launchOptions:{
          args: ["--start-maximized"],
         },
          viewport: null,
          //off,on
         // ...devices['']
       //   viewport : {width:720,height:720}
         },
         

  
      }
      ]

};

module.exports = config;