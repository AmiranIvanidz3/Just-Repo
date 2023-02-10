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

  function validateDateInputs() {
    const startDateInputs = document.querySelectorAll(".start-i");
    const endDateInputs = document.querySelectorAll(".end-i");
  
    for (let i = 0; i < startDateInputs.length; i++) {
      const startDate = startDateInputs[i].value;
      const endDate = endDateInputs[i].value;
      if (startDate === "" || endDate === "") {
        return false;
      }
      const startDateValue = new Date(startDate);
      const endDateValue = new Date(endDate);
      if (startDateValue > endDateValue) {
        return false;
      }
    }
  
  
    console.log(true);
  }
  function checkInputs(){
    emptyInput(".tan-i")
    emptyInput(".describe-i")
    emptyInput(".employe-i")
    emptyInput(".start-i")
    emptyInput(".end-i") 
  }
  checkInputs()