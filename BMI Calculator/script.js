const btn = document.getElementById("calculate");

// function to calculate BMI
function bmiCalculator() {

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // condition for invalid input
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Enter valid values");
    return;
  }

  // height in cms and weight in kgs
  const bmi = (weight / (height/100) ** 2).toFixed(2);
  const result = document.getElementById("result");
  let message = "";
  let color = "";

//   Categories of BMI
  // Underweight: Below 18.5
  if (bmi < 18.5) {
    message = "Under Weight";
    color = "#4da6ff"; // light blue
  }

  // Normal weight: 18.5–24.9
  else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Normal weight";
    color = "#28a745"; // green
  }

  // Overweight: 25.0–29.9
  else if (bmi >= 25 && bmi <= 29.9) {
    message = "Overweight";
    color = "#ffc107"; // yellow-orange
  }

  // Obesity: 30 or above
  else if (bmi <= 30 && bmi >= 39) {
    message = "Obesity";
    color = "#ff5733"; // orange-red
  }

  // Severe Obesity: 40 or above
  else {
    message = "Severe Obesity";
    color = "#dc3545"; // red
  }
  result.innerText = `${message}\n BMI  : ${bmi}`;
  result.style.color = color;
}

// event listener
btn.addEventListener("click", bmiCalculator);
