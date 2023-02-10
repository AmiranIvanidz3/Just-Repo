
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
