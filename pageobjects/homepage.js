var page = require('./page');
var assert = require('assert');
//var prop = require('./prop');

//Page objects
var saleButton = '//*[@class="b7afbb84"]'
var locationBar = '//*[@placeholder="Location"]'
var locationIndex = '//li[@data-selected="true"]'
var moreOption = '//span[@aria-label="Collapse expand button"]'
var moreFilteroptions = '//span[@class="_514754a1"]'
var propertyTypebox = '//div[@name="property type"]'
var priceFilter = '//div[@aria-label="Price filter"]'
var minPricerange = '//button[@aria-label="200,000"]'
var maxPricerange = '//div[@role="listbox"]//div[@class="ef391b9a"][2]'
var bedsFilter = '//div[@aria-label="Bed filter"]'
var selectedBeds = '//*[@aria-label="5"]'
var findButton = '//a[@role="button"]'
var closeBedsfilter = '//button[@class="_85b30621"]'
var showpropertytypes = '//*[@name="Category picker"]'
//var selectedproperty

//Page Functions
var homepage = Object.create(page, { 

    salebtn : {get: function() {return $(saleButton)}},

    enterlocation : {get: function() {homepageassertions.entertext1}},
    
    clickmoreoption :{get: function() {
        var expectedoption = 'More Options'
        if(browser.getText(moreFilteroptions) == expectedoption)
        {
            return $(moreOption).click()
        }
        else{
            console.log("More Filters are already viewable")
        }
    }},
    
    selectpropertytype : {value: function(selectedproperty){
        $(propertyTypebox).click();
        //var selectedproperty = 'Townhouse'
        var propertytypelist = $(showpropertytypes);
        var getPropertytypenames = $(showpropertytypes).getText('li');
        var numberofproperties = getPropertytypenames.length

        for (var i =0 ; i<=numberofproperties ; i++)
        {
            var propertyname = getPropertytypenames[i];
            if(propertyname == selectedproperty)
            {
                propertytypelist.$$('li')[i].click();
            }
        }    
    }},

    selectprice : {get: function(){
        $(priceFilter).click();
        $(minPricerange).click();
        console.log($(minPricerange).getText() + ' is selected as minimum price')
        //Saving the entire max price range
        var getMaxpricelist = $(maxPricerange);
        //Select the max price from the list
        getMaxpricelist.$$('button')[16].click();
        var selectMaxprice = getMaxpricelist.$$('button')[16];
        console.log(selectMaxprice.getText() + ' is selected as the max price');
    }},

    selectbeds : {get: function(){
        $(bedsFilter).click();
        $(selectedBeds).click();
        $(closeBedsfilter).click();
        //console.log(selectedbeds.getText() + ' is selected as the no. of beds')
    }},

    clickfindbutton : {get: function(){
        $(findButton).click();
        console.log(browser.getTitle());
    }}
})

var homepageassertions = Object.create(page, {
    entertext1: {get: function(text1){
        var text = $(locationBar).setValue("Dubai")
        browser.pause(2000);
        $(locationIndex).click();
    }}


})

module.exports = homepage;