// Open window
jQuery(".btn-open-modal").on("click", function () {
	var modalId = jQuery(this).data("modal");
	var modal = jQuery("#" + modalId);
	modal.show();
});

// Close window
jQuery(".modal .close").on("click", function () {
	var modal = jQuery(this).parent().parent();
	modal.hide();
});

// Filter
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 550,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.assetsFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 550,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});