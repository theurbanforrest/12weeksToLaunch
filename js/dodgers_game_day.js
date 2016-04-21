/*
dodgers_game_day.js
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
    this.DATA_SRC = "http://losangeles.dodgers.mlb.com/gdcross/components/game/mlb/year_2016/month_04/day_20/gid_2016_04_20_lanmlb_atlmlb_1/linescore.json";
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
        url: this.DATA_SRC,
        dataType: "json",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};


$('#btn-1').click(function(){
    console.log("button 1 clicked");
    new Markit.QuoteService("GE",function(jsonResult) {
        console.log("GE data returned");
        $('#print-details').text(JSON.stringify(jsonResult));
    });
});
