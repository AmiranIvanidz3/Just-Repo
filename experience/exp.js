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
var input = document.querySelector("#tanamdeboba-input");
let tanamdeboba_s;
let employe_s;
let start_date_s;
let end_date_s;
let describe_s;
let input_s;





//start date and end date validation 

function validateDates() {
    var startDate = new Date(document.querySelector("#start-date-input").value);
    var endDate = new Date(document.querySelector("#end-date-input").value);
  
    if (startDate > endDate) {
      alert("End date must be after start date.");
      start_date_s = false
    } else {
 
      start_date_s = true
      start_date_input.style.borderColor = "green"
        end_date_input.style.borderColor = "green"
    }
    if(start_date_s == false){
        start_date_input.style.borderColor = "red"
        end_date_input.style.borderColor = "red"
    }
    return start_date_s
  }


  //Tanamdebobaa and Employe Validation
  function validateInput(){
   
  input.addEventListener("input", function() {
    if (input.value.length >= 2) {
      input.style.borderColor = "green";
      input_s= true
    } else {
      input.style.borderColor = "red";
      input_s = false
    }
  });
  return input_s
  }
  
  validateInput()
  function validateEmploye(){
    
    employe_input.addEventListener("input", function() {
      if (employe_input.value.length >= 2) {
          employe_input.style.borderColor = "green";
          employe_s = true
      } else {
          employe_input.style.borderColor = "red";
          employe_s = false
      } 
      
    });
    return employe_s
    }
    validateEmploye()

    
  





  //describe_input  validation
function describe(){

  describe_input.addEventListener("input", function() {
    if (describe_input.value.length > 2) {
        describe_input.style.borderColor = "green";
        describe_s = true
    } else {
        describe_input.style.borderColor = "red";
        describe_s = false
    }
  });
  return describe_s
}
  
describe()


function checkAll(){
  let documen = document.querySelectorAll()
}