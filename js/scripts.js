$(document).ready(function(){

    // initialize portfolio navigation utilizing the amazing Isotope Library
    var $grid = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    // bind filter button click
    $('.portolio-categories').on( 'click', 'a', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

});


