//Initializing Flickity
var elem = document.querySelector('.carousel carousel-main');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel carousel-main', {
  // options
});

//https://flickity.metafizzy.co/options.html
var flktyA = new Flickity('.carousel carousel-main');
var flktyB = new Flickity( '.carousel carousel-nav', {
 asNavFor: '.carousel carousel-nav'
});

