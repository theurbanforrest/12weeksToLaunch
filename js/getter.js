/*
getter.js
This code has been modified from the original used on http://markitondemand.com

The MIT License

Copyright (c) 2013 MarkIt On Demand, Inc. http://markitondemand.com
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

var Getter = {};
/**
* Define the Service.
* First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
* Second argument is fCallback, a callback function executed onSuccess of API.
*/
Getter.Service = function(dDataSrc, fCallback) {
    this.DATA_SRC = dDataSrc;
    this.fCallback = fCallback;
    this.makeRequest();
        //Catch errors
};
/**
* Ajax success callback. fCallback is the 2nd argument in the Service constructor.
*/
Getter.Service.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};
/**
* Ajax error callback
*/
Getter.Service.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};

Getter.Service.prototype.makeRequest = function() {
    //Abort any open requests
    if (this.xhr) { this.xhr.abort(); }
    //Start a new request
    this.xhr = $.ajax({
        url: this.DATA_SRC,
        dataType: "json",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};

/*
=====================================================================
*/

/* onClick example

$('#btn-1').click(function(){
    console.log("button 1 clicked");
    var passThis = "http://losangeles.dodgers.mlb.com/gdcross/components/game/mlb/year_2016/month_04/day_20/gid_2016_04_20_lanmlb_atlmlb_1/linescore.json";

    new Getter.Service(passThis,function(jsonResult) {
        console.log("dodgers data returned");
        $('#print-details').text(JSON.stringify(jsonResult));
    });
});

*/
