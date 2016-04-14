define(function(require, exports, module) {

    var url = require('bam.url/url');

    var mobileAppPage = "/mobile",
        pageUrl = url.Location();

    var deviceQuery = {
        params: window.location.search.length,
        searchParams: window.location.search,
        deviceRedirect: mobileAppPage,
        queryStrings: { //Add new Query strings here
            utm_source: pageUrl.getParam("utm_source"),
            utm_medium: pageUrl.getParam("utm_medium"),
            utm_campaign: pageUrl.getParam("utm_campaign")
        },
        $ios: $('#get-the-app').find('#get-the-app-appstore-link-apple'),
        $android: $('#get-the-app').find('#get-the-app-appstore-link-google'),
        buildUrl: function() {
		    var QS = deviceQuery.queryStrings, //Reference to queryStrings object 
		        appUrls = { 
		            adobe: { 
		                ios: 'http://c00.adobe.com/v3/515f352a16b13d9bcc2157c27f75bce14a2e040113e7839865083acedd9eaf87/start?a_i_id=1006676445&a_dd=i&ctxa.referrer.campaign.name=' +
		                    QS.utm_campaign + '&ctxa.referrer.campaign.trackingcode=&ctxa.referrer.campaign.source=' +
		                    QS.utm_source + '&ctxa.referrer.campaign.medium=' +
		                    QS.utm_medium + '&ctxa.referrer.campaign.content=&ctxa.referrer.campaign.term=',

		                android: 'http://c00.adobe.com/v3/2d15cab9353bbcfb093fa8dd0d86a33a0e636fc5af8eca2941fe585a053de20f/start?a_g_id=com.pgatourlive.pga&a_dd=g&ctxa.referrer.campaign.name=' +
		                    QS.utm_campaign + '&ctxa.referrer.campaign.trackingcode=&ctxa.referrer.campaign.trackingcode=&ctxa.referrer.campaign.source=' +
		                    QS.utm_source + '&ctxa.referrer.campaign.medium=' +
		                    QS.utm_medium + '&ctxa.referrer.campaign.content=&ctxa.referrer.campaign.term='
		            }
		        };

		    return appUrls.adobe;
		},
		injectUrl: function(){
			var that = this,
				getAppUrl = that.buildUrl(); //Store the return value of method buildUrl() which is the appUrls object

		        	 that.$ios.attr('href', getAppUrl.ios); 
		        	 that.$android.attr('href', getAppUrl.android); 
		},
        handleParams: function() {
		    var that = this,
		        flags = 'utm_source' || 'utm_medium' || 'utm_campaign'; //Store condition for query strings that we are looking for   

		    if ((that.searchParams.indexOf(flags) !== -1)) { //If we see the query strings that we are looking for then....
		        	that.injectUrl();	//Build the proper URL based on device
		    } 
		},
        detectParams: function() {
        	var that = this,
        		urlChecked = true;

        	if(urlChecked){
	        	//Does the url have search params ? Yes "handle them" No then just do the normal redirect
	            that.params ? that.handleParams() : '';
	            urlChecked = false;
        	}
        }
    };

    deviceQuery.detectParams();

});