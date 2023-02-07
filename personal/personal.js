//Name Valiation
const name = document.getElementById('name')
const name_label = document.getElementById('name-label')
const name_span= document.getElementById('name-span')
let savedInfo = []


function checkName(input, span)
{
    input.value = sessionStorage.getItem('name')
    name_span.innerText = sessionStorage.getItem('name')
    if(handleNameValidation(input.value)){
        if(input.value.length > 2){
            input.style.borderColor = "green"
            span.style.color = "green"
            return true;
        }
    }else{
        input.style.borderColor = "red"
        span.style.color = "red"
        return false
    }
        input.addEventListener('input', function(){
                name_span.innerHTML = input.value
                sessionStorage.setItem('name', name_span.innerText);
                
                
               
            if(handleNameValidation(input.value)){
                if(input.value.length > 2){
                    input.style.borderColor = "green"
                    span.style.color = "green"
                    return true;
                }
            }else{
                input.style.borderColor = "red"
                span.style.color = "red"
                return false
            }
        })
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
    if(handleNameValidation(input.value)){
        if(input.value.length > 2){
            input.style.borderColor = "green"
            span.style.color = "green"
            return true

        }
    }else{
        input.style.borderColor = "red"
        span.style.color = "red"
        return false
    }
        input.addEventListener('input', function(){
         lastName_span.innerHTML = lastName.value
         sessionStorage.setItem('lName', lastName.value)
            if(handleNameValidation(input.value)){
                if(input.value.length > 2){
                    input.style.borderColor = "green"
                    span.style.color = "green"
                    return true

                }
            }else{
                input.style.borderColor = "red"
                span.style.color = "red"
                return false
            }
        })
}

checkLastName(lastName, lastName_label)

// picture upload

    const previewImage = (event) => {
   
        const imageFiles = event.target.files;
            console.log(imageFiles)
        const imageFilesLength = imageFiles.length;
     
        if (imageFilesLength > 0) {
          
            const imageSrc = URL.createObjectURL(imageFiles[0]);
           
           
     
            const imagePreviewElement = document.querySelector("#preview-selected-image");
        
            imagePreviewElement.src = imageSrc;
           
        
            imagePreviewElement.style.display = "block";
            return true
        }
    };




    //mail
    const mail_span_right = document.querySelector(".mail-span-right") 
    const mail = document.getElementById('mail');
    const mail_span = document.querySelector(".mail-span")
    mail.value = sessionStorage.getItem('mail')
    mail_span_right.innerText = sessionStorage.getItem('mail')
    let stringo = ""
    function validateEmail() {
        
            mail.addEventListener('input', function(){
                mail_span_right.innerText = mail.value
                sessionStorage.setItem('mail', mail.value)
               let string = [...mail.value].reverse().join("");
               if(string.substr(0,12) === "eg.yrrebder@"){
                mail_span.style.color = "green"
                stringo = true;

                return true
               }else{
                mail_span.style.color = "red"
                stringo = false
                return false
               }
               })
            }
            validateEmail()


//phone number 
            const phone = document.querySelector(".mobile-span-right")
            const mobile = document.getElementById("phone")
            phone.innerText = sessionStorage.getItem('phone')
            mobile.value = sessionStorage.getItem('phone')
            mobile.addEventListener('input', function(){
                phone.innerText = mobile.value
                sessionStorage.setItem('phone', mobile.value)
            })


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
// function next(){
//     if(checkName()){
//         console.log("heyy")
//     }
// }
// documentgetElementById('personal-from').addEventListener("submit")


            
            
        
        
    

