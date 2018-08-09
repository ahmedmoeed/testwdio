var page = require('./page');

var propertyCard = "//*[@aria-label='Listing link']"
var selectedLocation = "//*[@aria-label='Active filter label']"
var propertyType = "//*[@aria-label='Category filter']"
var priceFilter = "//*[@aria-label='Price filter']//child::span[text()]"
var bedsFilter = "//*[@aria-label='Bed filter']//child::span[text()]"

var propertydetailpage = Object.create(page, {

    clickOnPropertycard : {get: function(){
        var totalPropertycards = $$(propertyCard).length
        var randomPropertycard = Math.floor((Math.random() * totalPropertycards) + 1)
        $$(propertyCard)[randomPropertycard].click()
    }},

    verifypropertydetail : {get: function(){

        //Storing selected filter values in the variables
        var locationFiltervalue = $(selectedLocation).getText()
        var propertyTypevalue = $(propertyType).getText()
        var priceFilterlength = $$(priceFilter).length
        var bedsFilterlength = $$(bedsFilter).length

        for (var i = 0 ; i < priceFilterlength ; i++)
        {
            if (i == 0)
            {
                minPrice = $(priceFilter)[i].getText()
            }
            else if (i == 2)
            {
                maxPrice = $(priceFilter)[i].getText()
            }
        }
        for (var j = 0 ; j< bedsFilterlength ; j++)
        {
            if (i == 0)
            {
                bedsValue = $(bedsFilter)[i].getText()
            }
        }
    }}
})

module.exports = propertydetailpage;