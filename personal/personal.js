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


            
            
        
        
    

