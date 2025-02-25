// @ts-check
const { devices } = require('@playwright/test');

const config = {
   testDir: './tests_ts',
   //Maximum time one test can run for.
   timeout: 30 * 1000,
   expect: {

    timeout: 5000
   },

   reporter: 'html',
   //Shared settings for all the projects below.
   use: {
    
      browserName: 'chromium',
      headless : true,
      screenshot : 'on', //'off', 'only-on-failure'
      trace : 'retain-on-failure'
   },

};

module.exports = config;