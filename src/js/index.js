import 'bootstrap';

import '../scss/index.scss';

// var $ = require( 'jquery' );
// require( 'datatables.net' )( window, $ );

$('#alert').click(() => {
  alert('jQuery works!');
});


$('.dropdown-submenu > a').on("click", function(e) {
  var submenu = $(this);
  $('.dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
  // hide any open menus when parent closes
  $('.dropdown-menu.show').removeClass('show');
});


// Your jQuery code
