
function getAllStorage(){
  getStorage(".describe-i")
  getStorage(".tan-i")
  getStorage(".employe-i")
  getStorage(".end-i")
  getStorage(".start-i")
 }
function setStorage(classs){
    var y = 0
    var inputs = document.querySelectorAll(`${classs}`);
    inputs.forEach(function(input){
      let info = input.value
      sessionStorage.setItem(`${classs}${y}`, `${input.value}`)
  
      y++
    })
    y = 0
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



 
  
   getAllStorage()
 
 
 
 document.getElementById("amo").innerHTML = sessionStorage.getItem("html")
 if(sessionStorage.getItem("right-html") != null){
  document.getElementById("right").innerHTML += sessionStorage.getItem("right-html")
 }

 function saveByClass(classs){
    document.addEventListener('input', function(event) {
        let inputs = document.getElementsByClassName(`${classs}`);
        for (let i = 0; i < inputs.length; i++) {
          sessionStorage.setItem(`${classs}` + i, inputs[i].value);
        }
      });
      
      window.addEventListener('load', function() {
        let inputs = document.getElementsByClassName(`${classs}`);
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = sessionStorage.getItem(`${classs}` + i) || '';
        }
      });
     
      
    
}

let number = 1;

if(sessionStorage.getItem("number") !== null){
  number = sessionStorage.getItem("number")
  console.log(number)
}

let right_number = 0;


function giveInfo(classs, element){
let number = document.querySelectorAll(`${classs}`)

 for(let i = 0; i < number.length; i++){
 let ss = document.querySelector(`${element}${i}`)
ss.innerText = sessionStorage.getItem(`${classs}${i}`)
 }
let ira = 0;
 number.forEach(function(x){
  let ss = document.querySelector(`${element}${ira}`)
  ira++

  x.addEventListener("input", function(){
    ss.innerText = x.value
    
 
  })
 
 
})
ira = 0;

}

function giveAllinfo(){
   
giveInfo(".employe-i", ".right-employe")
giveInfo(".tan-i", ".right-tan")
giveInfo(".start-i", ".right-start")
giveInfo(".end-i", ".right-end")
giveInfo(".describe-i", ".right-describe")


}


giveAllinfo()


function validateDates() {
  const startDates = document.querySelectorAll('.start-i');
  const endDates = document.querySelectorAll('.end-i');
    setStorage(".start-i")
     setStorage(".end-i")
  let isValid = true;
  for (let i = 0; i < startDates.length; i++) {
    const startDate = startDates[i];
    const endDate = endDates[i];
    const startDateValue = startDate.value;
    const endDateValue = endDate.value;

    if (startDateValue === '' || endDateValue === '') {
      startDate.style.borderColor = 'red';
      endDate.style.borderColor = 'red';
      isValid = false;
    } else if (startDateValue > endDateValue) {
      startDate.style.borderColor = 'red';
      endDate.style.borderColor = 'red';
      isValid = false;
    }
    else if (startDateValue == endDateValue) {
      startDate.style.borderColor = 'red';
      endDate.style.borderColor = 'red';
      isValid = false;} 
      else {
      startDate.style.borderColor = 'green';
      endDate.style.borderColor = 'green';
    }
  }
  return isValid;
}
function workDate(){
    const startDates = document.querySelectorAll('.start-i');
    const endDates = document.querySelectorAll('.end-i');
for (let i = 0; i < startDates.length; i++) {
  const startDate = startDates[i];
  const endDate = endDates[i];
  startDate.onchange = validateDates;
  endDate.onchange = validateDates;

}

}
workDate()
function emptyInput(classs) {
    let status;
    var inputs = document.querySelectorAll(`${classs}`);
    for (var i = 0; i < inputs.length; i++) {
      if ( inputs[i].value.length < 2  ) {
        inputs[i].style.borderColor = "red"
        status = false;
      }else {
        inputs[i].style.borderColor = "green"
        status = true
      }
    }
    return status
  }
  function checkInputs(){
   emptyInput(".tan-i")
   emptyInput(".describe-i")
   emptyInput(".employe-i")
   emptyInput(".start-i")
  emptyInput(".end-i") 
  if(!emptyInput(".tan-i") || ! emptyInput(".describe-i") 
    || !emptyInput(".employe-i")
    || !emptyInput(".start-i")
    || !emptyInput(".end-i") ){
        return false

   }else{
    return true
   }

  }
  
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
  function typeBorderColor(){
    liveValidate(".tan-i")
    liveValidate(".describe-i")
    liveValidate('.employe-i')
  }
  typeBorderColor()
  




  document.querySelector('.add-more').addEventListener("click", function(e){
    if(checkInputs() && validateDates()){
        saveByClass("tan-i")
        saveByClass("describe-i")
        saveByClass("employe-i")
        saveByClass("start-i")
        saveByClass("end-i")
       
        
        document.getElementById("amo").innerHTML += `<div class="add">
            
        <div class="tanamdeboba-add">
        <label for="tanamdeboba-input">თანამდებობა</label>
        <input  data-id="0" class="os tan-i tan-i${number}" minlength="2" required placeholder="დეველოპერი, დიზაინერი და ა.შ." type="text" id="tanamdeboba-input">
        <span>მინიმუმ 2 სიმბოლო</span>
    </div>
        
    <div class="employe-add">
    <label minlength="2" required for="employe-input">დამსაქმებელი</label>
    <input data-employe="0" class="employe-i${number} os employe-i" placeholder="დამსაქმებელი" type="text" id="employe-input">
    <span>მინიმუმ 2 სიმბოლო</span>
</div>

       <div style="border:1px solid black; display:flex; justify-content:space-between ">
       <div class="start-date-add">
       <label for="start-date-input">დაწყების რიცხვი</label>
       <input  data-input="0" class="start-i${number} start-i os"  required id="start-date-input" type="date">
       </div>
        

       <div class="end-date-add">
       <label for="end-date-input">დამტავრების რიცხვი</label>
       <input data-input="0" class="end-i${number} end-i os" required id="end-date-input" type="date">
   </div>
    </div>

    <div class="describe-add">
            <label for="describe-input">აღწერეთ</label>
            <textarea data-describe="0" class="describe-i${number} os describe-i" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" type="text" id="describe-input"></textarea>
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
       sessionStorage.setItem('html', document.getElementById("amo").innerHTML )
        typeBorderColor()
        workDate()
        getAllStorage()


document.getElementById("right").innerHTML += ` 
<div  class="right-exp">
<header>გამოცდილება</header>
<label class="right-label"><span class="right-tan${number}"></span>  <span class="right-employe${number}"></span></label>
<p class="right-date"><span class="right-start${number}"></span> - <span class="right-end${number}"></span></p>
<p  class="right-describe right-describe${number}"></p>

</div> `
number++

sessionStorage.setItem("number", number)

sessionStorage.setItem('right-html',document.getElementById("right").innerHTML )
giveAllinfo()



      
  }
}
)   

document.getElementById("experience-form").addEventListener("submit",function(e){
  if(!checkInputs() && !validateDates()){
    e.preventDefault()
  }
})




