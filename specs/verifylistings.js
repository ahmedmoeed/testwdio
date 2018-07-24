'use strict';

var homepage = require('../pageobjects/homepage');
var searchlisting = require('../pageobjects/searchlisting');

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
        homepage.enterlocation("Abu Dhabi");
    })

    it ('Select values from more filters', function(){
        browser.pause(2000);
        homepage.clickmoreoption;
        console.log('More option button is clicked to view other filters');
    })

    it ('Select Property Type', function(){
        browser.pause(2000);
        homepage.selectpropertytype('Townhouse');
    })

    it('Select min and max price', function(){
        homepage.selectMinprice("200,000");
        homepage.selectMaxprice("5,000,000");
    })

    it('Select beds', function(){
        homepage.selectbeds("5");
    })

    it('Click on find button', function(){
        homepage.clickfindbutton;
    })
});

describe('searchlisting', function(){
    it('verify all the listings are from dubai', function() {
        searchlisting.verifyListingslocation;
    })
});