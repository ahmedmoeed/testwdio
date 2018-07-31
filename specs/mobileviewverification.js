'use strict';

var homepagemobile = require('../pageobjects/homepagemobile');

describe('homepagemobile', function() {
    it('should open the website and get title', function() {
        browser.url('https://sl:getin1@bayut-development.herokuapp.com/');
        console.log(browser.getTitle());
    })
        
    it ('should click on for sale', function(){
        browser.pause(2000);
       homepagemobile.salebtn
    })

    it ('Enter dubai in location bar', function(){
        browser.pause(2000);
        homepagemobile.enterlocation("Dubai");
    })

    it ('Select Property Type', function(){
        browser.pause(2000);
        homepagemobile.propertytypeboxmobile;
    })

    it ('Select min and max price', function(){
        browser.pause(2000);
        homepagemobile.selectPrice("200,000" , "5,000,000");
    })

    it ('Select no of beds', function(){
        homepagemobile.selectBeds("3");
    })

    it ('Select no of baths', function(){
        homepagemobile.selectBaths("2");
    })

    it ('Select min and max area', function(){
        homepagemobile.selectArea("1,000" , "14,000");
    })

    it ('Click on update button', function(){
        browser.pause(2000);
        homepagemobile.clickOnupdate
    })
})