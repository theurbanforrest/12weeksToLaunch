var ngDesigners = angular.module('ngDesigners', [])
  .controller('MainCtrl', function(){
    this.hello = 'world';
    this.item = {
      name: 'Bu Laia',
      description: 'Braddah from da aloha state, small kine b'
    };
  });