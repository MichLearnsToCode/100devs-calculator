let display = "";
let operation;
let number1;

document.querySelector("#one").addEventListener("click", append1);
document.querySelector("#two").addEventListener("click", append2);
document.querySelector("#three").addEventListener("click", append3);
document.querySelector("#four").addEventListener("click", append4);
document.querySelector("#five").addEventListener("click", append5);
document.querySelector("#six").addEventListener("click", append6);
document.querySelector("#seven").addEventListener("click", append7);
document.querySelector("#eight").addEventListener("click", append8);
document.querySelector("#nine").addEventListener("click", append9);
document.querySelector("#zero").addEventListener("click", append0);
document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#decimal").addEventListener("click", decimal);

document.querySelector("#divide").addEventListener("click", divide);
document.querySelector("#multiply").addEventListener("click", multiply);
document.querySelector("#minus").addEventListener("click", minus);
document.querySelector("#plus").addEventListener("click", plus);
document.querySelector("#equals").addEventListener("click", equals);

function decimal() {
  display = "" + display + ".";
  document.querySelector("#placeToPutResult").innerText = display;
}

function append1() {
  display = "" + display + 1;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append2() {
  display = "" + display + 2;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append3() {
  display = "" + display + 3;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append4() {
  display = "" + display + 4;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append5() {
  display = "" + display + 5;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append6() {
  display = "" + display + 6;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append7() {
  display = "" + display + 7;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append8() {
  display = "" + display + 8;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append9() {
  display = "" + display + 9;
  document.querySelector("#placeToPutResult").innerText = display;
}

function clear() {
  display = "";
  operation = "";
  number1 = 0;
  document.querySelector("#placeToPutResult").innerText = display;
}

function append0() {
  if (display === "0") {
    display = "0";
  } else {
    display = "" + display + 0;
  }
  document.querySelector("#placeToPutResult").innerText = display;
}

function plus() {
  operation = "plus";
  number1 = parseFloat(display);
  display = "";
  document.querySelector("#placeToPutResult").innerText = display;
}

function minus() {
  operation = "minus";
  number1 = parseFloat(display);
  display = "";
  document.querySelector("#placeToPutResult").innerText = display;
}

function divide() {
  operation = "divide";
  number1 = parseFloat(display);
  display = "";
  document.querySelector("#placeToPutResult").innerText = display;
}

function multiply() {
  operation = "multiply";
  number1 = parseFloat(display);
  display = "";
  document.querySelector("#placeToPutResult").innerText = display;
}

function equals() {
  if (operation == "plus") {
    display = number1 + parseFloat(display);
    document.querySelector("#placeToPutResult").innerText = display;
  } else if (operation == "minus") {
    display = number1 - parseFloat(display);
    document.querySelector("#placeToPutResult").innerText = display;
  } else if (operation == "divide") {
    display = number1 / parseFloat(display);
    document.querySelector("#placeToPutResult").innerText = display;
  } else if (operation == "multiply") {
    display = number1 * parseFloat(display);
    document.querySelector("#placeToPutResult").innerText = display;
  }
}
