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
        homepage.enterlocation;
        console.log('Dubai entered in the location box')
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
        homepage.selectprice;
    })

    it('Select beds', function(){
        homepage.selectbeds;
    })

    it('Click on find button', function(){
        homepage.clickfindbutton;
    })
});