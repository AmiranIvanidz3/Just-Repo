//variables-storage
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



//useful variables
const tanamdeboba_input = document.getElementById("tanamdeboba-input")
const employe_input = document.getElementById('employe-input')
const start_date_input = document.getElementById("start-date-input")
const end_date_input = document.getElementById("end-date-input")
const describe_input = document.getElementById("describe-input")
const form = document.getElementById("experience-form")




//start date and end date validation 

function validateDates() {
    var startDate = new Date(document.querySelector("#start-date-input").value);
    var endDate = new Date(document.querySelector("#end-date-input").value);
    var status;
    if (startDate > endDate) {
      alert("End date must be after start date.");
      status = false
     

    } else {
      alert("Dates are valid.");
      status = true
    }
    return status
  }

 

