
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




