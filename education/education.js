document.getElementById("right").innerHTML = sessionStorage.getItem("right-html")
document.getElementById("right").innerHTML += `
<div  class="right-exp" style="position:relative">
<header>განათლება</header>
<p class="right-collage right-collage0"><span>ბიზნესისა და ტექოლოგიების უნივერსიტეტი</span> <span>, სტუდენტი</span></p>
<p  class="right-endDate0 right-endDate"style="margin-top:7px">12-05-06</p>
<p class="right-tell0 right-tell" style="margin-top:16px;">ssssssssss</p>

    
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
  liveValidate(".collage-i")
 
  
}
getAllStorage()
typeBorderColor()