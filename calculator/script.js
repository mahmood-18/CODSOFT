let screen = document.getElementById("display");

function append(value) {
  screen.value += value;
}

function clearDisplay() {
  screen.value = "";
}

function delChar() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    alert("Invalid Expression");
  }
}

// Scientific operations

function sqrt() {
  screen.value = Math.sqrt(Number(screen.value)).toFixed(5);
}

function square() {
  screen.value = Math.pow(Number(screen.value), 2);
}

function reciprocal() {
  let num = Number(screen.value);
  if (num !== 0) {
    screen.value = (1 / num).toFixed(5);
  } else {
    alert("Can't divide by zero");
  }
}

function pi() {
  screen.value += Math.PI.toFixed(5);
}
