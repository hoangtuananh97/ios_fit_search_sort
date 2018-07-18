// external js: isotope.pkgd.js
var qsRegex;
 var filterValue;
 var filters = {};
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.color-shape',
   getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }

  }
  
});
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
        });
// store filter for each group


$('.filters').on( 'click', '.button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
   filterValue = concatValues( filters );
  

  // set filter for Isotope
  $grid.isotope({ filter: function() {
     // console.log(searchResult);
      var searchResult = qsRegex ? $(this).text().match( qsRegex ) : true;
      var buttonResult = filterValue ? $(this).is( filterValue ) : true;
      return searchResult && buttonResult;
        }
     });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}



// bind sort button click

  // bind sort button click
  $('.sort-button-group').on( 'click', 'button', function() {

    /* Get the element name to sort */
    var sortValue = $(this).attr('data-sort-value');

    /* Get the sorting direction: asc||desc */
    var direction = $(this).attr('data-sort-direction');

    /* convert it to a boolean */
    var isAscending = (direction == 'asc');
    var newDirection = (isAscending) ? 'desc' : 'asc';

    /* pass it to isotope */
    $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });

    $(this).attr('data-sort-direction', newDirection);

    var span = $(this).find('.fa');
    span.toggleClass('fa-chevron-up fa-chevron-down');

  });




// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}