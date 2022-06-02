let weight = document.getElementById("weight");
let height = document.getElementById("height");
let output = document.getElementById("output");

let calcButton = document.getElementById("calcButton");

let calc = calcButton.addEventListener("click", function () {
  output.innerHTML = calculate(weight.value, height.value);
});

function calculate(weight, height) {
  let result = ((weight / (height * height)) * 703).toFixed(1);
  if (weight <= 0 || weight === "" || isNaN(weight)) {
    return "Please enter valid numbers.";
  }
  if (height <= 0 || height === "" || isNaN(height)) {
    return "Please enter valid numbers.";
  }

  if (result < 18.5) {
    return `Your BMI is ${result}. You are underweight.`;
  } else if (result < 25) {
    return `Your BMI is ${result}. You are normal weight.`;
  } else if (result < 29.9) {
    return `Your BMI is ${result}. You are overweight.`;
  } else if (result >= 30) {
    return `Your BMI is ${result}. You are obese.`;
  }
}
