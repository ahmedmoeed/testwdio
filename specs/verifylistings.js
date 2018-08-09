'use strict';

var homepage = require('../pageobjects/homepage');
var searchlisting = require('../pageobjects/searchlisting');
var propertydetailpage = require('../pageobjects/propertydetailpage')

describe('homepage', function() {
    it ('should open the website and get title', function() {
        browser.url('https://sl:getin1@bayut-development.herokuapp.com/');
        console.log(browser.getTitle());
    })
        
    step ('should click on for sale', function(){
       homepage.salebtn
       console.log ('For Sale button is clicked')
    })

    step ('Enter dubai in location bar', function(){
        homepage.enterlocation("Dubai");
    })

    step ('Select values from more filters', function(){
        browser.pause(2000);
        homepage.clickmoreoption;
        console.log('More option button is clicked to view other filters');
    })

    step ('Select Property Type', function(){
        browser.pause(2000);
        homepage.clickpropertytypebox
        homepage.selectpropertytype('Townhouse');
    })

    step ('Select min and max price', function(){
        homepage.selectPrice("200,000" , "5,000,000");
    })

    step ('Select beds', function(){
        homepage.selectbeds("5");
    })

    step ('Click on find button', function(){
        homepage.clickfindbutton;
    })
});

describe('searchlisting', function(){
    it('verify all the listings are from dubai', function() {
        searchlisting.verifyListingslocation;
        searchlisting.navigateNextpage("1");
        searchlisting.verifyListingslocation;
    })
});

describe ('propertydetailpage', function(){
    it('verify that property detail have correct filter values', function(){
        searchlisting.navigateNextpage("0");
        propertydetailpage.clickOnPropertycard

    })
});