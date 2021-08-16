const headerBar = document.querySelector(".header-bar");
const cmcLogo = document.querySelector(".cmc-logo");
const socialMedia = document.querySelector(".social-media");
const ulList = document.querySelector(".ul-list");

headerBar.addEventListener("click", function () {
    console.log('I was clicked');
  ulList.classList.toggle("hidden");
  cmcLogo.classList.toggle("hidden");
  socialMedia.classList.toggle("hidden");
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}