/*
ngdesigner-sample.js
Angular for Designers tutorial by simpulton
cloned from onehungrymind.com
*/

angular.module('ngDesigners', [])
  .controller('MainCtrl', function(){
    this.hello = 'world';
    this.item = {
      name: 'My Name',
      description: 'This description'
    };
  });