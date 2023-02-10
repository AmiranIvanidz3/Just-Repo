function storePersonalInfo(){
const name_span = document.getElementById('name-span')
const lastName_span = document.getElementById('lastName-span')
const mail_span_right = document.querySelector(".mail-span-right")
const about = document.querySelector("#aboutMe")
const mobile = document.querySelector(".mobile-span-right")
name_span.innerText = sessionStorage.getItem('name')
lastName_span.innerText = sessionStorage.getItem('lName')
mail_span_right.innerText = sessionStorage.getItem('mail')
mobile.innerText = sessionStorage.getItem('phone')
if(sessionStorage.getItem('about') !== ""){
    about.innerText = sessionStorage.getItem('about')
    document.querySelector(".aboutMe-span").style.opacity = "1"
}
const displayedImage = document.getElementById("preview-selected-image")
var storedImageData = sessionStorage.getItem('imageData');
if (storedImageData) {
  displayedImage.src = storedImageData;
  
}
}


storePersonalInfo()