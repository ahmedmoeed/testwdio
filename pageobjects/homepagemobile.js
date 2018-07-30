var page = require('./page');

// Page objects Mobileview
var minPricefilter = '//*[text()="Price ("]//following::select[1]//child::option'
var maxPricefilter = '//*[text()="Price ("]//following::select[2]//child::option'
var bedsFilter = '//*[text()="Beds"]//following::li[@role]'
var bathsFilter = '//*[text()="Baths"]//following::li[@role]'
var minAreaFilter = '//*[text()="Area ("]//following::select[1]//child::option'
var maxAreaFilter = '//*[text()="Area ("]//following::select[2]//child::option'
var updateButton = '//*[text()="update"]'

//Page Function
var homepagemobile = Object.create(page, { 

    selectPrice : {value: function(minPrice, maxPrice){
        var minPricerange = $$(minPricefilter).length
        var maxPricerange = $$(maxPricefilter).length

        for (var i = 0 , j = 0  ; i < minPricerange , j < maxPricerange ; i++ , j++)
        {
            if ($$(minPricefilter)[i].getText() == minPrice)
            {
                $$(minPricefilter)[i].click()  
            }
            if ($$(maxPricefilter)[j].getText() == maxPrice)
            {
                $$(maxPricefilter)[j].click()  
            }
        }
    }},

    selectBeds : {value: function(selectedBeds){
        var totalBeds = $$(bedsFilter).length

        for (var i = 0 ; i < totalBeds ; i++)
        {
            if($$(bedsFilter)[i].getText() == selectedBeds)
            {
                $$(bedsFilter)[i].click()
            }
        }
    }},

    selectBaths : {value: function(selectedBaths){
        var totalBaths = $$(bathsFilter).length

        for (var i = 0 ; i < totalBaths ; i++)
        {
            if($$(bathsFilter)[i].getText() == selectedBaths)
            {
                $$(bathsFilter)[i].click()
            }
        }
    }},

    selectArea : {value: function(minArea, maxArea){
        var minArearange = $$(minAreaFilter).length
        var maxArearange = $$(maxAreaFilter).length

        for (var i = 0 , j = 0  ; i < minArearange , j < maxArearange ; i++ , j++)
        {
            if ($$(minAreaFilter)[i].getText() == minArea)
            {
                $$(minAreaFilter)[i].click()  
            }
            if ($$(maxAreaFilter)[j].getText() == maxArea)
            {
                return $$(maxAreaFilter)[j].click()  
            }
        }
    }},

    clickOnupdate : {get: function(){
        $(updateButton).click()
    }}
})

module.exports = homepagemobile;