// Modal
var modal = document.getElementById('modal-effect');

// Button that opens the modal
var btn = document.getElementById("code");

// Span
var span = document.getElementsByClassName("close")[0];

// Open window
btn.onclick = function() {
	modal.style.display = "block";
}

// Close window
span.onclick = function() {
	modal.style.display = "none";
}

// Clean header

$(document).ready(function() {
	$(window).load(function() {
	// this code will run after all other $(document).ready() scripts
	// have completely finished, AND all page elements are fully loaded.
	$('.page-scroll').parent().removeClass('active');

	});
});