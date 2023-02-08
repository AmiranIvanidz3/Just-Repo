
x()
function x(){
    var imageInput = document.getElementById('file-uload');
var displayedImage = document.getElementById('preview-selected-image]');

imageInput.addEventListener('change', function(e) {
  var reader = new FileReader();
  reader.onload = function(event) {
    displayedImage.src = event.target.result;
    sessionStorage.setItem('imageData', displayedImage.src);
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Load image from session storage on page load
var storedImageData = sessionStorage.getItem('imageData');
if (storedImageData) {
  displayedImage.src = storedImageData;
}
}