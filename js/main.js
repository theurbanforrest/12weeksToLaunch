//main.js
//All of the main page functions


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
      $(c).html(a[i].display);
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
      $(c).html(a[i].headline);
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
      $(c).html(a[i].body);
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

    setHeadline(carouselData,'panel-0','#carousel-panel-0-headline');
    setBody(carouselData,'panel-0','#carousel-panel-0-body');
    setButtonText(carouselData,'panel-0','#carousel-panel-0-button-text');
