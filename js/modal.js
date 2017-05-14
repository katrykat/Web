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

