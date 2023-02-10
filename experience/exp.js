//variables-storage
getStorage(".describe-i")
getStorage(".tan-i")
getStorage(".employe-i")
getStorage(".end-i")
getStorage(".start-i")
document.getElementById("amo").innerHTML = sessionStorage.getItem("html")
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
  setStorage(".start-i")
  let e = event.target
  var start = new Date(event.target.value)
  console.log(start.value)
  startDataa = start
  startElem = e
  validateDates()
  

  
}
function endDate(event){
  setStorage(".end-i")
  let e = event.target
  var endDate = new Date(event.target.value)
  endDataa = endDate
  endElem = e
  validateDates()

}
function validateDates() {
  if(startDataa < endDataa){
    startElem.style.borderColor = "green"
    endElem.style.borderColor = "green"
   }else{
    startElem.style.borderColor = "red"
    endElem.style.borderColor = "red"
   }
  }
  function checkDateInput() {
    var dateInput = document.querySelectorAll('input[type="date"]');
    dateInput.forEach(function(dateInput){
      if (!dateInput.value) {
        dateInput.style.borderColor = "red"
        return false
      }
      dateInput.style.borderColor = "green"
      return true
    })
    }
  
 
  function checkDates(){
    let x = document.querySelectorAll(".start-i")
    let y =  document.querySelectorAll(".start-i")
   let start =  new Date(start_date_input.value)
   
   let end =  new Date(end_date_input.value)
   if(start < end){
    
    start_date_input.style.borderColor = "green"
    end_date_input.style.borderColor = "green"
    return true
    
   }else{
  
    start_date_input.style.borderColor = "red"
    end_date_input.style.borderColor = "red"
    return false

   }
   
    

  }
  

let input_num = 0;
  //Tanamdebobaa and Employe Validation
  

  function validateEmploye(){
    const e = document.querySelectorAll(".employe-i")
    
    
  }
    validateEmploye()

    
  




function allBorderColor(){
  let elem = document.querySelectorAll(".os")
  elem.forEach(function(x){
    x.style.backgroundColor = "yellow"
  })
}
  //describe_input  validation
 
function describe(){
  const describe_i = document.querySelectorAll(".describe-i")
    if(emptyInput("describe-i")){
      return true
    }else{
      return false
    }
    


 

  
}
  
describe()




function liveValidate(classs){
  var inputs = document.querySelectorAll(`${classs}`);
  inputs.forEach(function(input){
    input.addEventListener("input",function(){
      setStorage(classs)
      
      if(input.value.length  < 2){
        input.style.borderColor = "red"

      }else{
        input.style.borderColor = "green"

      }
    })
})
}
liveValidate(".tan-i")
liveValidate(".describe-i")
liveValidate('.employe-i')

getStorage(".describe-i")
getStorage(".tan-i")
getStorage(".employe-i")
getStorage(".end-i")
getStorage(".start-i")
function emptyInput(classs) {
  let status;
  var inputs = document.querySelectorAll(`${classs}`);
 

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value && inputs[i].value < 1  ) {
      inputs[i].style.borderColor = "red"
      status = false;
    }else{
      inputs[i].style.borderColor = "green"
      status = true
    }
  }
  return status
}

console.log(sessionStorage.getItem(".describe-i1"))
 function setStorage(classs){
  var number = 0
  var inputs = document.querySelectorAll(`${classs}`);
  inputs.forEach(function(input){
    let info = input.value
    sessionStorage.setItem(`${classs}${number}`, `${input.value}`)

    number++
  })
  number = 0
 }
 function getStorage(classs){
  var number = 0
  var inputs = document.querySelectorAll(`${classs}`);
  inputs.forEach(function(input){

    input.value = sessionStorage.getItem(`${classs}${number}`)
    number++
  
  })
  number = 0
 }



 
 function status(){
  if(emptyInput(".tan-i") &&  emptyInput(".describe-i") &&  emptyInput(".employe-i")){
    return true
  }else{
    return false
  }
  
 }



  form.addEventListener("click", function(e){
   
    if(e.target.innerHTML == "მეტის გამოცდილების დამატება" || e.target.value =='add'){
     
      emptyInput(".tan-i")
      emptyInput(".describe-i")
      emptyInput(".employe-i")
      checkDateInput()
    


     
    
      if(status()){
       
        
        document.getElementById("amo").innerHTML += `<div class="add">
            
        <div class="tanamdeboba-add">
            <label for="tanamdeboba-input">თანამდებობა</label>
            <input data-input="0" class="os tan-i" minlength="2" required placeholder="დეველოპერი, დიზაინერი და ა.შ." type="text" id="tanamdeboba-input">
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
            <input onchange="startDate(event)" class="start-i" required id="start-date-input" type="date">
        </div>
        

        <div class="end-date-add" >
            <label for="end-date-input">დამტავრების რიცხვი</label>
            <input class="os end-i" required id="end-date-input" onchange="endDate(event)" type="date">
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
        liveValidate(".tan-i")
  liveValidate(".describe-i")
  liveValidate('.employe-i')
  getStorage(".describe-i")
getStorage(".tan-i")
getStorage(".employe-i")
getStorage(".end-i")
getStorage(".start-i")
        

        sessionStorage.setItem("html", document.getElementById("amo").innerHTML)
     
       
       
      }else{
        console.log("xui")
      }
    }

    


  })
  


  // sessionStorage.clear()