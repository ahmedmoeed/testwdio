var page = require('./page');
var assert = require('assert');

//Page objects
var saleButton = '//*[text() = "For Sale"]'
var locationBar = '//*[@type="text"]'
var locationIndex = '//li[@data-selected="true"]'
var moreOption = '//*[@aria-label="Collapse expand button"]'
var moreFilteroptions = '//span[@class="_514754a1"]'
var propertyTypebox = '//div[@name="property type"]'
var priceFilter = '//div[@aria-label="Price filter"]'
var minPricerange = '//*[@role="listbox"]//*[@class="ef391b9a"][1]//child::button[@aria-label]'
var maxPricerange = '//*[@role="listbox"]//div[@class="ef391b9a"][2]//child::button[@aria-label]'
var bedsFilter = '//*[@aria-label="Bed filter"]'
var selectedBeds = '//*[@aria-label="Bed filter"]/following::*[@aria-label]'
var findButton = '//a[@role="button"]'
var closeBedsfilter = '//button[@class="_85b30621"]'
var showPropertytypes = '//*[@name="Category picker"]'
//var selectedproperty

//Page Functions
var homepage = Object.create(page, { 

    salebtn : {get: function() {return $(saleButton)}},

    enterlocation : {value: function(setLocation) {
        $(locationBar).setValue(setLocation)
        browser.pause(2000);
        $(locationIndex).click();
        console.log(setLocation + " is entered in the location box")
    }},
    
    clickmoreoption :{get: function() {
        var expectedOption = 'More Options'
        if(browser.getText(moreFilteroptions) == expectedOption)
        {
            return $(moreOption).click()
        }
        else{
            console.log("More Filters are already viewable")
        }
    }},

    selectpropertytype : {value: function(selectedProperty){
        $(propertyTypebox).click();
        //var selectedproperty = 'Townhouse'
        var propertyTypelist = $(showPropertytypes);
        var getPropertytypenames = $(showPropertytypes).getText('li');
        var numberofProperties = getPropertytypenames.length

        for (var i =0 ; i<=numberofProperties ; i++)
        {
            var propertyName = getPropertytypenames[i];
            if(propertyName == selectedProperty)
            {
                propertyTypelist.$$('li')[i].click();
            }
        }    
    }},

    selectMinprice : {value: function(minPrice, maxPrice){
        $(priceFilter).click();

        var totalMinprices = $$(minPricerange).length;
        var totalMaxprices = $$(maxPricerange).length

        for (var i = 0, j = 0 ; i < totalMinprices, j <totalMaxprices ; i++ , j++ )
        {
            //var price = $(minPricerange)[i].getText()
            if ($$(minPricerange)[i].getText() == minPrice)
            {
                $$(minPricerange)[i].click()
                console.log(minPrice + ' is selected as the min price'); 
            }
            if($$(maxPricerange)[i].getText() == maxPrice)
            {
                $$(maxPricerange)[i].click()
                console.log(maxPrice + ' is selected as the max price');
            }
        }
    }},

    selectbeds : {value: function(bedValue){
        $(bedsFilter).click();
        var totalBeds = $$(selectedBeds).length
        for (var i = 0 ; i < totalBeds ; i++)
        {
            if ($$(selectedBeds)[i].getText() == bedValue)
            {
                $$(selectedBeds)[i].click()
                console.log(bedValue + ' beds are selected')
            }
        }
        $(closeBedsfilter).click();
    }},

    clickfindbutton : {get: function(){
        $(findButton).click();
        console.log(browser.getTitle());
    }}
})

module.exports = homepage;