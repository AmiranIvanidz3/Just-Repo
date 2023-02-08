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
let num = 0;




let startDataa;
let startElem;
let endDataa;
let endElem;
//start date and end date validation 
function startDate(event){
  let e = event.target
  var start = new Date(event.target.value)
  startDataa = start
  startElem = e
  validateDates()

  
}
function endDate(event){
  let e = event.target
  var endDate = new Date(event.target.value)
  endDataa = endDate
  endElem = e
  validateDates()

}
function validateDates() {
   
    if (startDataa > endDataa) {
      alert("End date must be after start date.");
      start_date_s = false
    } else {
 
      start_date_s = true
      startElem.style.borderColor = "green"
        endElem.style.borderColor = "green"
    }
    if(start_date_s == false){
        startElem.style.borderColor = "red"
        endElem.style.borderColor = "red"
    }
    return start_date_s
  }


  //Tanamdebobaa and Employe Validation
  function validateInput(){
    const inpu = document.querySelectorAll(".tan-i")
    inpu.forEach(function(x){
      x.addEventListener("input", function() {
        if (x.value.length >= 2) {
          x.style.borderColor = "green";
          input_s= true
        } else {
          x.style.borderColor = "red";
          input_s = false
        }
      });
return input_s;
    })
   
   
  
  return input_s
  }
  //input
  validateInput()
  function validateEmploye(){
    const e = document.querySelectorAll(".employe-i")
    console.log(e)
    e.forEach(function(x){
      x.addEventListener("input", function() {
        if (x.value.length >= 2) {
            x.style.borderColor = "green";
            employe_s = true
        } else {
            x.style.borderColor = "red";
            employe_s = false
        } 
        
      });
      return employe_s
      

    })
  }
    validateEmploye()

    
  





  //describe_input  validation
 
function describe(){
  const describe_i = document.querySelectorAll(".describe-i")
  describe_i.forEach(function(i){
    
    i.addEventListener("input", function() {
      if (i.value.length > 2) {
          i.style.borderColor = "green";
          describe_s = true
      } else {
          i.style.borderColor = "red";
          describe_s = false
      }
    });
    return describe_s


  })

  
}
  
describe()

function checkInputBorders(className) {
  let inputs = document.getElementsByClassName(className);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].style.borderColor !== 'green') {
      return false;
    }
  }
  return true;
}






 
 



  form.addEventListener("click", function(e){
    
    
    if(e.target.innerHTML == "მეტის გამოცდილების დამატება" || e.target.value =='add'){
     
     
    
      if(checkInputBorders("os")){
       
    
        document.getElementById("amo").innerHTML += `<div class="add">
            
        <div class="tanamdeboba-add">
            <label for="tanamdeboba-input">თანამდებობა</label>
            <input class="os tan-i" minlength="2" required placeholder="დეველოპერი, დიზაინერი და ა.შ." type="text" id="tanamdeboba-input">
            <span>მინიმუმ 2 სიმბოლო</span>
        </div>

        <div class="employe-add">
            <label minlength="2" required for="employe-input">დამსაქმებელი</label>
            <input class="os employe-i" placeholder="დამსაქმებელი" type="text" id="employe-input">
            <span>მინიმუმ 2 სიმბოლო</span>
        </div>

       <div style="border:1px solid black; display:flex; justify-content:space-between ">
        <div class="start-date-add">
            <label for="start-date-input">დაწყების რიცხვი</label>
            <input onchange="endDate(event)" class="start-date-i" required id="start-date-input" type="date">
        </div>
        

        <div class="end-date-add" >
            <label for="end-date-input">დამტავრების რიცხვი</label>
            <input class="os end-date-i" required id="end-date-input" onchange="startDate(event)" type="date">
        </div>
    </div>

    <div class="describe-add">
        <label for="describe-input">აღწერეთ</label>
        <textarea  class="describe-i" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" type="text" id="describe-input"></textarea>
    </div>
    <div style="
    width: 798px;
    height: 0px;
    left: 149px;
    margin-top: 58px;
    border: 1px solid #C1C1C1;
    margin-bottom:59px;
    margin-left:20px"></div>



   


        </div> `
        describe()
        validateEmploye()
        validateInput()
       
       
      }else{
        console.log("xui")
      }
    }

    


  })


