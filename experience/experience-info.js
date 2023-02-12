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
function saveByClasss(classs){
  document.addEventListener('input', function(event) {
      let inputs = document.getElementsByClassName(`${classs}`);
      for (let i = 0; i < inputs.length; i++) {
        sessionStorage.setItem(`${classs}` + i, inputs[i].innerText);
      }
    });
    
    window.addEventListener('load', function() {
      let elem = document.getElementsByClassName(`${classs}`);
      for (let i = 0; i < elem.length; i++) {
        elem[i].innerText = sessionStorage.getItem(`${classs}` + i) || '';
      }
    });
   
    
  
}
saveByClass("tan-i")
saveByClass("describe-i")
saveByClass("employe-i")
saveByClass("start-i")
saveByClass("end-i")

saveByClasss("right-start-r")
saveByClasss("right-end-r")
saveByClasss("right-employe-r")
saveByClasss("right-tan-r")
saveByClasss("right-describe-r")





  
  
  
  