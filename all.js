
const addInputsButton = document.getElementById("add-inputs-button");
const inputsContainer = document.getElementById("inputs-container");

addInputsButton.addEventListener("click", function() {
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  input1.classList.add("input");
  input2.classList.add("input");
  inputsContainer.appendChild(input1);
  inputsContainer.appendChild(input2);
});

window.addEventListener("beforeunload", function() {
  const inputs = document.querySelectorAll(".input");
  const inputsValues = [];
  inputs.forEach(function(input) {
    inputsValues.push(input.value);
  });
  sessionStorage.setItem("inputsValues", JSON.stringify(inputsValues));
});

window.addEventListener("load", function() {
  const inputsValues = JSON.parse(sessionStorage.getItem("inputsValues"));
  if (inputsValues) {
    inputsValues.forEach(function(inputValue) {
      const input1 = document.createElement("input");
      const input2 = document.createElement("input");
      input1.classList.add("input");
      input2.classList.add("input");
      input1.value = inputValue;
      input2.value = inputValue;
      inputsContainer.appendChild(input1);
      inputsContainer.appendChild(input2);
    });
  }
});


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
          <input  data-id="0" name="position${number}" class="os tan-i tan-i${number}" minlength="2" required placeholder="დეველოპერი, დიზაინერი და ა.შ." type="text" id="tanamdeboba-input">
          <span>მინიმუმ 2 სიმბოლო</span>
      </div>
          
      <div class="employe-add">
      <label minlength="2" required for="employe-input">დამსაქმებელი</label>
      <input data-employe="0" name="employer${number}" class="employe-i${number}  required os employe-i" placeholder="დამსაქმებელი" type="text" id="employe-input">
      <span>მინიმუმ 2 სიმბოლო</span>
  </div>
  
         <div style="border:1px solid black; display:flex; justify-content:space-between ">
         <div class="start-date-add">
         <label for="start-date-input">დაწყების რიცხვი</label>
         <input  data-input="0" name="start_date${number}"class="start-i${number} start-i os" required  required id="start-date-input" type="date">
         </div>
          
  
         <div class="end-date-add">
         <label for="end-date-input">დამტავრების რიცხვი</label>
         <input data-input="0" name="due_date${number}" class="end-i${number} end-i os" required id="end-date-input" type="date">
     </div>
      </div>
  
      <div class="describe-add">
              <label for="describe-input">აღწერეთ</label>
              <textarea data-describe="0" name="description${number}" required class="describe-i${number} os describe-i" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" type="text" id="describe-input"></textarea>
          </div>
      <div style="
      width: 798px;
      height: 0px;
      left: 149px;
      margin-top: 58px;
      border: 1px solid #C1C1C1;
      margin-bottom:59px;
      margin-left:20px"></div>
          </div>
           `
         sessionStorage.setItem('html', document.getElementById("amo").innerHTML )
          typeBorderColor()
          workDate()
          getAllStorage()
  
  
  document.getElementById("right").innerHTML += ` 
  <div style="
          width: 680px;
          height: 0px;
          margin-left:80px;
         
          
          border: 1px solid #C1C1C1;
          margin-bottom:59px;"></div>
  <div  class="right-exp">
  <header>გამოცდილება</header>
  <label class="right-label"><span class="right-tan${number} right-tan-r"></span>  <span class="right-employe${number} right-employe-r"></span></label>
  <p class="right-date"><span class="right-start${number} right-start-r"></span> - <span class="right-end${number} right-end-r"></span></p>
  <p   class="right-describe-r right-describe${number}" style="margin-top:17px;"></p>
  
  </div> 
  `
  number++
  
  sessionStorage.setItem("number", number)
  
  sessionStorage.setItem('right-html',document.getElementById("right").innerHTML )
  giveAllinfo()
  
  
  
        
    }
  }
  )   
  
  document.getElementById("experience-form").addEventListener("submit",function(e){
    if(!checkInputs() || !validateDates()){
      e.preventDefault()
      console.log(validateDates())
    }
  })
  
  
  //Name Valiation
const name = document.getElementById('name')
const name_label = document.getElementById('name-label')
const name_span= document.getElementById('name-span')



let d;

function checkName(input, span)
{
   
    input.value = sessionStorage.getItem('name')
    name_span.innerText = sessionStorage.getItem('name')
    
        input.addEventListener('input', function(){
            
                name_span.innerHTML = input.value
                sessionStorage.setItem('name', name_span.innerText);
            if(handleNameValidation(input.value) && input.value.length > 2){
                
                    input.style.borderColor = "green"
                    span.style.color = "green"
                   d = true
                   
                
            }else{
                input.style.borderColor = "red"
                span.style.color = "red"
                d = false
             
            }
            
           
        })
        if(handleNameValidation(input.value) && input.value.length > 2){
                
           
           d = true
           
        
    }else{
        
        d = false
     
    }
       
        return d
        
        
}
// only georgian letters 
function handleNameValidation(value)  {
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    return value.length >= 2 && new
    RegExp(onlyGeorgian).test(value);
}
checkName(name, name_label)


//LastName Validation
const lastName = document.getElementById('lastName')
const lastName_label = document.getElementById('lastName-label')
const lastName_span = document.getElementById('lastName-span')

function checkLastName(input, span)
{   
   
   
    lastName.value = sessionStorage.getItem('lName')
    lastName_span.innerText = sessionStorage.getItem('lName')
   
        input.addEventListener('input', function(){
         lastName_span.innerHTML = lastName.value
         sessionStorage.setItem('lName', lastName.value)
            if(handleNameValidation(input.value)){
                if(input.value.length > 2){
                    input.style.borderColor = "green"
                    span.style.color = "green"
                    d = true;

                }
            }else{
                input.style.borderColor = "red"
                span.style.color = "red"
                d= false;
            }
        })
        if(handleNameValidation(input.value) && input.value.length > 2){
                
            
           d = true
           
        
        }else{
       
        d = false
     
        }

        return d
}

checkLastName(lastName, lastName_label)

console.log(lastName)





// picture upload
let p;

x()
function x(){
    var imageInput = document.getElementById('file-upload');
var displayedImage = document.getElementById('preview-selected-image');
if(displayedImage.src == "file:///C:/Users/amira/OneDrive/Desktop/AMirani/personal.html"){
    p = false
}else{
    p=true
}
console.log(p)


imageInput.addEventListener('change', function(e) {
  var reader = new FileReader();
  reader.onload = function(event) {
    displayedImage.src = event.target.result;
    sessionStorage.setItem('imageData', displayedImage.src);
    p= true
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Load image from session storage on page load
var storedImageData = sessionStorage.getItem('imageData');
if (storedImageData) {
  displayedImage.src = storedImageData;
  p = true
}
}




    //mail
    const mail_span_right = document.querySelector(".mail-span-right") 
    const mail = document.getElementById('mail');
    const mail_span = document.querySelector(".mail-span")
    mail.value = sessionStorage.getItem('mail')
    mail_span_right.innerText = sessionStorage.getItem('mail')
    
    function isValidEmail(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
      }
      function validateEmail(email) {
        const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/;
        return emailRegEx.test(email);
    }
    mail.addEventListener('input', function(){
        if(validateEmail(mail.value)){
            mail.style.borderColor = "green"
            sessionStorage.setItem("mail", mail.value)
        }else{
            mail.style.borderColor = "red"
            sessionStorage.setItem("mail", mail.value)
        }
        mail_span_right.innerText = mail.value

    })
            validateEmail()

           
//phone number 
function formatPhoneNumber(phoneInput) {
  let formattedPhoneNumber = "+995 ";
  formattedPhoneNumber += phoneInput.substring(0, 3) + " ";
  formattedPhoneNumber += phoneInput.substring(3, 6) + " ";
  formattedPhoneNumber += phoneInput.substring(6, 9) + " ";
  formattedPhoneNumber += phoneInput.substring(9);
  return formattedPhoneNumber;
}
            const phone = document.querySelector(".mobile-span-right")
            const mobile = document.getElementById("phone")
            phone.innerText = sessionStorage.getItem('phone')
            mobile.value = sessionStorage.getItem('phone')
            
            mobile.addEventListener("input", function() {
                phone.innerText = formatPhoneNumber(mobile.value);
                phone_status = true
                sessionStorage.setItem("phone", mobile.value)
                
                
              });
             
              
              
              
              
              

            


//About-Me-Section
const aboutMeSpan = document.querySelector(".aboutMe-span")
const xboutMe = document.getElementById("aboutMe")
const aboutMeTextarea = document.getElementById("about-me-textarea")
function AboutMe(){
    aboutMeTextarea.value = sessionStorage.getItem('about')
    sessionStorage.getItem('about')
    if(aboutMeTextarea.value != 0){
        aboutMeSpan.style.opacity = "1"
        xboutMe.innerText = aboutMeTextarea.value
       
       
    }
    if(aboutMeTextarea.value >= 0){
        aboutMeSpan.style.opacity = "0" 
        xboutMe.innerText = aboutMeTextarea.value
        
    }
    aboutMeTextarea.addEventListener('input', function(){
        sessionStorage.setItem('about',aboutMeTextarea.value )
        if(aboutMeTextarea.value != 0){
            aboutMeSpan.style.opacity = "1"
            xboutMe.innerText = aboutMeTextarea.value
           
           
        }
        if(aboutMeTextarea.value >= 0){
            aboutMeSpan.style.opacity = "0" 
            xboutMe.innerText = aboutMeTextarea.value
            
        }
    })
}
AboutMe()


const personal_form = document.getElementById('personal-form')
personal_form.addEventListener("submit",function(e){
    {
        if(!checkLastName(lastName, lastName_label) || !checkName(name, name_label) || !validateEmail(mail.value) || p == false){
          
            e.preventDefault()
            console.log("false")
            
          
        }
       

     


        

        
       
            
        
    
        
       
       
   
    }
 

})



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
  document.getElementById("right").innerHTML = sessionStorage.getItem("right-html")
  document.getElementById("right").innerHTML += `
  <div style="
  width: 680px;
  height: 0px;
  margin-left:80px;
  
  
  border: 1px solid #C1C1C1;
  margin-bottom:59px;"></div>
  <div  class="right-exp" style="position:relative">
  <header style="margin-bottom:15px">განათლება</header>
  <span  class="right-collage right-collage0"></span> <span class="right-quality right-quality0"></span>
  <p  class="right-endDate0 right-endDate"style="margin-top:7px" id="s"></p>
  <p class="right-tell0 right-tell" style="margin-top:16px;"></p>
  
      
  </div>
  
  
  `
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
   function getAllStorage(){
  
    
    getStorage(".collage-i")
    getStorage(".endDate-i")
    getStorage(".quality-i")
    getStorage(".tell-i")
    
   }
   getAllStorage()
   function liveValidate(classs){
    var inputs = document.querySelectorAll(`${classs}`);
    inputs.forEach(function(input){
      input.addEventListener("input",function(){
        setStorage(classs)
        
        if(input.value.length  == 0 ){
          input.style.borderColor = "red"
  
        }else{
          input.style.borderColor = "green"
  
        }
      })
  })
  }
  function typeBorderColor(){
    liveValidate(".collage-i")
    liveValidate(".endDate-i")
    liveValidate(".tell-i")
    liveValidate(".quality-i")
  }
  if(sessionStorage.getItem("right-html-2") !== null){
    document.getElementById("right").innerHTML = sessionStorage.getItem("right-html-2")
  
  }
  if(sessionStorage.getItem("added-i") !== null){
    getAllStorage()
    giveAllinfo()
  getData()
    document.getElementById("opa").innerHTML = sessionStorage.getItem("added-i") 
  }
  let number = 1;
  if(sessionStorage.getItem("number-2") !== null){
    number = sessionStorage.getItem("number-2")
  }
  typeBorderColor()
  
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
      
      ss.innerText = x.value
      x.addEventListener("input", function(){
        ss.innerText = x.value
  
        
     
      })
     
     
    })
    ira = 0;
    
    }
    function giveAllinfo(){
     
      giveInfo(".collage-i", ".right-collage")
      giveInfo(".quality-i", ".right-quality")
      giveInfo(".tell-i", ".right-tell")
      giveInfo(".endDate-i", ".right-endDate")
  
      
      
      }
      let nikita = 0;
      document.querySelector(".quality-i0").value = "heyy"
     
      nikita = 0
      
      if(document.querySelectorAll(".quality-i").length > 1){
        
        getAllStorage()
        giveAllinfo()
      getData()
      typeBorderColor()
      checkInputs()
      }
      
      giveAllinfo()
      
      document.querySelector(".add-more").addEventListener('click', function(){
  
      })
      let key = "https://resume.redberryinternship.ge/api"
  
      async function getData(){
        let response = await fetch("https://resume.redberryinternship.ge/api/degrees")
        let data = await response.json()
      
       populateSelect(data) 
    
      }
      function populateSelect(data) {
        const select = document.querySelectorAll(".quality-i");
        select.forEach(function(sele){
          data.forEach(item => {
           
            const option = document.createElement("option");
            option.value = item.title;
            option.innerText = item.title;
            sele.appendChild(option);
          
          });
        })
       
      }
      
      getData()
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
       emptyInput(".quality-i")
       emptyInput(".tell-i")
       emptyInput(".collage-i")
       emptyInput(".endDate-i")
      
      if(!emptyInput(".tell-i") || ! emptyInput(".quality-i") 
        || !emptyInput(".endDate-i")
        || !emptyInput(".collage-i")
       ){
            return false
    
       }else{
        return true
       }
    
      }
      
      saveByClass("endDate-i")
            saveByClass("quality-i")
            saveByClass("tell-i")
            saveByClass("collage-i")
            getAllStorage()
            giveAllinfo()
          getData()
          typeBorderColor()
    
      document.getElementById("add-more").addEventListener("click", function(){
        if(checkInputs()){
          checkInputs()
            saveByClass("endDate-i")
            saveByClass("quality-i")
            saveByClass("tell-i")
            saveByClass("collage-i")
            getAllStorage()
            giveAllinfo()
          getData()
            document.getElementById("right").innerHTML +=`
            <div style="
          width: 680px;
          height: 0px;
          margin-left:80px;
         
          
          border: 1px solid #C1C1C1;
          margin-bottom:59px;"></div>
            <div  class="right-exp" style="position:relative">
  <header style="margin-bottom:15px">განათლება</header>
  <span  class="right-collage right-collage${number}"></span> <span class="right-quality right-quality${number}"></span>
  <p  class="right-endDate${number} right-endDate"style="margin-top:7px" id="s"></p>
  <p class="right-tell${number} right-tell" style="margin-top:16px;"></p>
  
      
  </div>
            
            `
           
            
            document.getElementById("opa").innerHTML += `
            
              <div class="add">
              
                  <div class="tanamdeboba-add">
                      <label for="">სასწავლებელი</label>
                      <input  class="collage-i collage-i${number}" minlength="2" required  type="text" >
                      <span>მინიმუმ 2 სიმბოლო</span>
                  </div>
      
             
                 <div style=" display:flex; justify-content:space-between ">
                  <div class="start-date-add">
                      <label>ხარისხი</label>
                      <select required class="quality-i quality-i${number}" value="select" > <option value="">Select Degree</option></select>
                  </div>
                  
          
                  <div class="end-date-add" >
                      <label for="end-date-input">დამტავრების რიცხვი</label>
                      <input class="endDate-i endDate-i${number}" required   type="date">
                  </div>
              </div>
      
              <div class="describe-add">
                  <label for="describe-input">აღწერეთ</label>
                  <textarea id="textarea" class="tell-i tell-i${number}"  type="text"></textarea>
              </div>
              <div style="
              width: 798px;
              height: 0px;
              left: 149px;
              margin-top: 90px;
              border: 1px solid #C1C1C1;
              margin-bottom:59px;
              margin-left:20px"></div>
      
      
      
             
          
          
                  </div>
              
  
         
  
          ` 
          getAllStorage()
            giveAllinfo()
          getData()
          typeBorderColor()
          sessionStorage.setItem("added-i", document.getElementById("opa").innerHTML)
            sessionStorage.setItem("right-html-2",document.getElementById("right").innerHTML)
            number++
            sessionStorage.setItem("number-2", number)
          
            
            
        }
      
      })
  
      // sessionStorage.clear()
      document.getElementById("edu-form").addEventListener("submit", function(e){
      if(checkInputs() == false){
        e.preventDefault()
        checkInputs()
      }
      })
      // sessionStorage.clear()
      console.log(sessionStorage.getItem("number"))


            
            
        
        
    

