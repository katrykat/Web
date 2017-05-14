// Modal
var modal = document.getElementById('modal-effect');

// Button that opens the modal
var btn = document.getElementById("myCode");

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
