/*
stockquoter.js
Run js for the Stock Quoter

The MIT License

Copyright (c) 2013 Markit On Demand, Inc. http://markitondemand.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Markit = {};
/**
* Define the QuoteService.
* First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
* Second argument is fCallback, a callback function executed onSuccess of API.
*/
Markit.QuoteService = function(sSymbol, fCallback) {
    this.symbol = sSymbol;
    this.fCallback = fCallback;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
        //Catch errors
};
/**
* Ajax success callback. fCallback is the 2nd argument in the QuoteService constructor.
*/
Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};
/**
* Ajax error callback
*/
Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};

Markit.QuoteService.prototype.makeRequest = function() {
    //Abort any open requests
    if (this.xhr) { this.xhr.abort(); }
    //Start a new request
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};

/*
=====================================================================
*/

$('#btn-1').click(function(){
    console.log("button 1 clicked");
    new Markit.QuoteService("GE",function(jsonResult) {
        console.log("GE data returned");
        $('#print-details').text(JSON.stringify(jsonResult));
    });
});

$('#btn-2').click(function(){
    console.log("button 2 clicked");
    new Markit.QuoteService("FB",function(jsonResult) {
        console.log("FB data returned");
        $('#print-details').text(JSON.stringify(jsonResult));
    });
});

$('#btn-3').click(function(){
    console.log("button 3 clicked");
    new Markit.QuoteService("GOOG",function(jsonResult) {
        console.log("GOOG data returned");
        $('#print-details').text(JSON.stringify(jsonResult));
    });
});


