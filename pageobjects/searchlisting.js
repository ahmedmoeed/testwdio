var page = require('./page');
var assert = require('assert');

var propertyCard = '//*[@role="article"]'
var listings = '//*[@class="ba88a3b9"]'
var selectedLocation = '//*[@aria-label = "Active filter label"]'
var listingLocation = '//*[@aria-label="Search results header"]/following::div[@aria-label="Listing location"]'
var navigation  = '//*[@role="Navigation"]//child::div[@title]'

//Page Functions
var searchlisting = Object.create(page, { 

verifyListingslocation : {get: function(){

    var totalListingsperpage = $(listings)
    var gettingListings = totalListingsperpage.$$(propertyCard).length
    var locationFiltertext = $(selectedLocation).getText()

    for (var i = 0 ; i < gettingListings ; i++)
    {
        if($$(listingLocation)[i].getText().includes(locationFiltertext))
        {
            if (i == (gettingListings-1))
            {
                console.log(gettingListings + " listings on Page 1 are from " + locationFiltertext)
            }
        }
    else{
      assert.equal($$(listingLocation)[i].getText().includes("Dubai"), "The Listing is not in " + locationFiltertext)     
    }}
}},

navigateNextpage : {value: function(pageNumber){
    var navigationBar = $$(navigation).length
    if (navigationBar > 1)
    {   
        $$(navigation)[pageNumber].click()
    }
    //console.log("Verifying " + $$(navigation)[pageNumber].getText() + " listings")
}}

})

module.exports = searchlisting;