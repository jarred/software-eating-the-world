var css             = require('!style!css!sass!../scss/style.scss');
var Sizzle          = require('sizzle');
// var TweenMax        = require('gsap');

var els = {
  Earth: Sizzle('.earth')[0],
  EarthTexture: Sizzle('.js-earth-texture')[0]
};

var play = function(){
  TweenMax.to(els.EarthTexture, 2, {
    left: -250,
    ease: Linear.easeNone
  });
};

// play();
