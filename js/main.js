/*
main.js
All of the main page functions
*/

//FOR SPLASH PAGE ONLY
//Update .row to include margin-top: 25% for spacing
     $(".col-lg-4").css("margin-top","25%");

/*HELPER FUNCTIONS*/
  function getObject(a,b){
    //a is the object
    //b is the target's id
    //Requires target.items
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      console.log(a[i]);
      return a[i].items;
      }
    }
  }

  function setDisplay(a,b,c){
    //a is the object
    //b is the target's id
    //c is the target div
    //Requires target.display
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      $(c).text(a[i].display);
      console.log(b);
      return c;
      }
    }
  }

  function setHeadline(a,b,c){
    //a is the object
    //b is the target's id
    //c is the target div
    //Requires target.headline
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      $(c).text(a[i].headline);
      console.log(b);
      return c;
      }
    }
  }

   function setBody(a,b,c){
    //a is the object
    //b is the target's id
    //c is the target div
    //Requires target.body
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      $(c).text(a[i].body);
      console.log(b);
      return c;
      }
    }
  }

  function setButtonText(a,b,c){
    //a is the object
    //b is the target's id
    //c is the target div
    //Requires target.buttonText
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      $(c).html(a[i].buttonText);
      console.log(b);
      return c;
      }
    }
  }

    function setUrl(a,b,c){
    //a is the object
    //b is the target's id
    //c is the target div
    //Requires target.url
    for (var i = a.length - 1; i >= 0; i--) {
    if(a[i].id == b){
      $(c).html(a[i].url);
      console.log(b);
      return c;
      }
    }
  }

/*POPULATE NAV BAR via uxDataFeed*/
  var navData = uxDataFeed.navModule.items;
  var navDropDownData = getObject(navData,'dropdown');

  //Nav Bar Visible Elements
  setDisplay(navData,'sitelogo','#navbar-logo');
  setDisplay(navData,'home','#navbar-item0');
  setDisplay(navData,'about','#navbar-item1');
  setDisplay(navData,'contact','#navbar-item2');
  setDisplay(navData,'dropdown','#navbar-dropdown-title');

  //Dropdown Elements
  setDisplay(navDropDownData,'dropdown0','#navbar-dropdown0');
  setDisplay(navDropDownData,'dropdown1','#navbar-dropdown1');
  setDisplay(navDropDownData,'dropdown2','#navbar-dropdown2');
  setDisplay(navDropDownData,'dropdown3','#navbar-dropdown-postdividertitle');
  setDisplay(navDropDownData,'dropdown4','#navbar-dropdown-postdivider0');
  setDisplay(navDropDownData,'dropdown5','#navbar-dropdown-postdivider1');

/*POPULATE CAROUSEL via uxDataFeed*/

    var carouselData = uxDataFeed.carouselModule.items;

    setHeadline(carouselData,'panel-0','#carousel-headline-0');
    setBody(carouselData,'panel-0','#carousel-body-0');
    setButtonText(carouselData,'panel-0','#carousel-button-text-0');

    setHeadline(carouselData,'panel-1','#carousel-headline-1');
    setBody(carouselData,'panel-1','#carousel-body-1');
    setButtonText(carouselData,'panel-1','#carousel-button-text-1');

    setHeadline(carouselData,'panel-2','#carousel-headline-2');
    setBody(carouselData,'panel-2','#carousel-body-2');
    setButtonText(carouselData,'panel-2','#carousel-button-text-2');

/*POPULATE MARKETING MODULES via uxDataFeed*/

    var mktgData = uxDataFeed.marketingModule.items;

    setHeadline(mktgData,'mktg-0','#mktg-headline-0');
    setBody(mktgData,'mktg-0','#mktg-body-0');
    setButtonText(mktgData,'mktg-0','#mktg-button-text-0');

    setHeadline(mktgData,'mktg-1','#mktg-headline-1');
    setBody(mktgData,'mktg-1','#mktg-body-1');
    setButtonText(mktgData,'mktg-1','#mktg-button-text-1');

    setHeadline(mktgData,'mktg-2','#mktg-headline-2');
    setBody(mktgData,'mktg-2','#mktg-body-2');
    setButtonText(mktgData,'mktg-2','#mktg-button-text-2');

/*POPULATE FEATURETTES via uxDataFeed*/

    var featData = uxDataFeed.featurettesModule.items;

    setHeadline(featData,'feat-0','#feat-headline-0');
    setBody(featData,'feat-0','#feat-body-0');

    setHeadline(featData,'feat-1','#feat-headline-1');
    setBody(featData,'feat-1','#feat-body-1');

    setHeadline(featData,'feat-2','#feat-headline-2');
    setBody(featData,'feat-2','#feat-body-2');


