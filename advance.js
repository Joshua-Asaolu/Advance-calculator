let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(displayValue);
    display.textContent = result;
    displayValue = result.toString();
  } catch (error) {
    display.textContent = "Error";
  }
}
