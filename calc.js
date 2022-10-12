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
  let text = document.getElementById("monitorText").innerText;
  if (text == "0") {
    text = "";
  }
  text += button;
  document.getElementById("monitorText").innerText = text;
  textModify();
};

//Clear Monitor
const clearAll = () => {
  document.getElementById("monitorText").innerText = "0";
};

//back space
const backSpace = () => {
  let text = document.getElementById("monitorText").innerText;
  if (text.length == 1) {
    document.getElementById("monitorText").innerText = "0";
  } else {
    document.getElementById("monitorText").innerText = text.substring(
      0,
      text.length - 1
    );
  }
};

//keyboard Whriting
const keyboardWhrite = (event) => {
  let character = event.key;
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
    character == 1
  ) {
    whrite(character);
    onClickEffect(character);
  }
  if (character == ".") {
    whrite(character);
    character = "Decimal";
    onClickEffect(character);
  }
  if (character == "(") {
    whrite(character);

    character = "OpenParenthesis";
    onClickEffect(character);
  }
  if (character == ")") {
    whrite(character);

    character = "ClosedParenthesis";
    onClickEffect(character);
  }
  if (character == "-") {
    whrite(character);

    character = "Minus";
    onClickEffect(character);
  }
  if (character == "+") {
    whrite(character);

    character = "Plus";
    onClickEffect(character);
  }
  if (character == "*") {
    whrite("×");

    character = "Cross";
    onClickEffect(character);
  }
  if (character == "/") {
    whrite("÷");

    character = "Devide";
    onClickEffect(character);
  }
  if (character == "Backspace") {
    backSpace();

    character = "Delete";
    onClickEffect(character);
  }
  if (character == "Escape") {
    clearAll();

    character = "C";
    onClickEffect(character);
  }
};

//onClick effect
const onClickEffect = (character) => {
  document
    .getElementById(`button${character}`)
    .style.setProperty("opacity", "50%");

  setTimeout(function () {
    document
      .getElementById(`button${character}`)
      .style.setProperty("opacity", "");
  }, 150);
};

const openSettings = () => {
  document.getElementById("settingsMenue").style.display = "block";
};

//get the elemnt size in "...px" mode!
const getFontSize = (elementId) => {
  const textElement = document.getElementById(elementId);
  const cssTextObj = window.getComputedStyle(textElement, null);
  const fontSize = cssTextObj.getPropertyValue("font-size");
  return fontSize;
};

const monitorTextLinesNum = () => {
  const text = document.getElementById("monitorText").innerText;
  console.log(text);
};

const monitorText = () => {
  const text = document.getElementById("monitorText").innerText;
  return text;
};

//analyse and modify monitor text displaying
const textModify = () => {
  //get the elemnt size!
  const fontSize = getFontSize("monitorText");

  //get the monitor (assume without padding(10px from left and right)) and text width
  const monitorWidth = document.getElementById("monitor").offsetWidth - 20;
  const spanWidth = document.getElementById("monitorText").offsetWidth;

  //see how code is working!
  console.log(
    `fontSize=${fontSize} , monitorWidth=${monitorWidth} , spanWidth=${spanWidth} , monitorText=${monitorText()} , indexof=${document
      .getElementById("monitorText")
      .innerText.indexOf("<br>")}`
  );

  //main operations
  if (spanWidth > monitorWidth) {
    if (fontSize == "50px") {
      document.getElementById("monitorText").style.fontSize = "35px";
    } else {
      document.getElementById("monitorText").innerText += "<br>";
    }
  }
};
