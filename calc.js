//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

//Whirting on Monitor
const whrite = (button) => {
  let text = document.getElementById("monitor").innerText;
  if (text == "0") {
    text = "";
  }
  text += button;
  document.getElementById("monitor").innerText = text;
};

//Clear Monitor
const clearAll = () => {
  document.getElementById("monitor").innerText = "0";
};

//back space
const backSpace = () => {
  let text = document.getElementById("monitor").innerText;
  if (text.length == 1) {
    document.getElementById("monitor").innerText = "0";
  } else {
    document.getElementById("monitor").innerText = text.substring(
      0,
      text.length - 1
    );
  }
};

//keyboard Whriting
const keyboardWhrite = (event) => {
  let character = event.key;
  console.log(character);
  if (
    character == 0 ||
    character == 9 ||
    character == 8 ||
    character == 7 ||
    character == 6 ||
    character == 5 ||
    character == 4 ||
    character == 3 ||
    character == 2 ||
    character == 1 ||
    character == "." ||
    character == "(" ||
    character == ")" ||
    character == "-" ||
    character == "+"
  ) {
    whrite(character);
  }
  if (character == "*") {
    whrite("×");
  }
  if (character == "/") {
    whrite("÷");
  }
  if (character == "Backspace") {
    backSpace();
  }
  if (character == "Delete") {
    clearAll();
  }
};

const openSettings = () => {
  document.getElementById("settingsMenue").style.display = "block";
};
