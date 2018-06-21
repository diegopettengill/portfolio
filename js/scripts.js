$(document).ready(function () {

    // initialize portfolio navigation utilizing the amazing Isotope Library
    var $grid = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    //thankyou jqueyr Sidr
    $('#sidemenu-toggle').sidr({
        side: 'right',
        source: '.main-menu',
        displace: true,
        renaming:true
    });


    $('body').click(function () {
        $.sidr('close', 'sidr');
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    // bind filter button click
    $('.portolio-categories').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });

    $(document).on('click', '.trigger-modal', function (event) {
        event.preventDefault();

        var target = $(this).attr('data-target');

        $(target).iziModal('open', this); // Do not forget the "this"
    });

    //modals
    $('.izimodal').iziModal({
        history: false,
        title: "",
        // subtitle: "Simple, complete and lightweight modal plugin with jquery.",
        icon: 'icon-chat',
        // overlayColor: 'rgba(255, 255, 255, 0.4)',
        // headerColor: '#334c7b',
        iconColor: 'white',
        // fullscreen: true,
        width: 700,
        padding: 20,
        // rtl: true,
        bodyOverflow: false,
        // closeButton: false,
        // top: 50,
        // bottom: 50,
        onClosed: function(modal){
            // console.info(modal)
            //modal.destroy();
        },
        onOpening: function(modal){
            modal.startLoading();
        },
        onOpened: function(modal){
            modal.stopLoading();
            // setTimeout(function(){
            //     $("#modal-large .iziModal-wrap").scrollTop(0);
            // },1)
        }
    });

});


