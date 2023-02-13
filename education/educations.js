

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
      
      // sessionStorage.clear()
      console.log(sessionStorage.getItem("number"))