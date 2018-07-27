'use strict';

var homepage = require('../pageobjects/homepage');

describe('homepage', function() {
    it('should open the website and get title', function() {
        browser.url('https://sl:getin1@bayut-development.herokuapp.com/');
        console.log(browser.getTitle());
    })
        
    it ('should click on for sale', function(){
       homepage.salebtn.click();
       console.log ('For Sale button is clicked')
    })

    it ('Enter dubai in location bar', function(){
        homepage.enterlocation("Dubai");
    })

})