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
   getStorage(".describe-i")
getStorage(".tan-i")
getStorage(".employe-i")
getStorage(".end-i")
getStorage(".start-i")
  

 
 
 document.getElementById("amo").innerHTML = sessionStorage.getItem("html")
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
    } else {
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
            <input   data-input="0" class="os tan-i" minlength="2" required placeholder="დეველოპერი, დიზაინერი და ა.შ." type="text" id="tanamdeboba-input">
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
            <input  class="start-i" required id="start-date-input" type="date">
        </div>
        

        <div class="end-date-add" >
            <label for="end-date-input">დამტავრების რიცხვი</label>
            <input class="end-i" required id="end-date-input" type="date">
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
       sessionStorage.setItem('html', document.getElementById("amo").innerHTML )
        typeBorderColor()
        workDate()
        getStorage(".describe-i")
getStorage(".tan-i")
getStorage(".employe-i")
getStorage(".end-i")
getStorage(".start-i")
       
      
      
  }



    
     
    
      
}
)   


        
  
