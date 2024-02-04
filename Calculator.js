// function for clearing all values from the display box
function clearScreen() {
  document.getElementById("result").value = "";
}

// function for showing the values and numbers in the display box
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
