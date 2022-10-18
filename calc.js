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
  document.getElementById("monitorText").style.fontSize = "50px";
};

//back space
const backSpace = () => {
  let text = document.getElementById("monitorText").innerText;
  if (text[text.length - 1] === "\n") {
    document.getElementById("monitorText").innerText = text.substring(
      0,
      text.length - 1
    );
  }
  text = document.getElementById("monitorText").innerText;
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

//get the elemnt font size in "...px" mode!
const getFontSizeString = (elementId) => {
  const textElement = document.getElementById(elementId);
  const cssTextObj = window.getComputedStyle(textElement, null);
  const fontSize = cssTextObj.getPropertyValue("font-size");
  return fontSize;
};

//get the elemnt font size in "Number" mode!
const getFontSize = (elementId) => {
  const fontSize = parseInt(getFontSizeString(elementId));
  return fontSize;
};

//////////////////////////////////////////////////////////////////////////
const monitorTextLinesNum = () => {
  const text = document.getElementById("monitorText").innerText;
  console.log(text);
};

//get monitor text
const monitorText = () => {
  const text = document.getElementById("monitorText").innerText;

  return text;
};

//minify text
const minifyTextFontSize = () => {
  //get the elemnt size!
  const fontSize = getFontSize("monitorText");
  document.getElementById("monitorText").style.fontSize = `${fontSize - 1}px`;
};

//analyse and modify monitor text displaying
const textModify = () => {
  ////////////////////////////////////////////////////////
  //get the elemnt size!
  let fontSize = getFontSize("monitorText");

  //get the monitor width (assume without padding(10px from left and right))
  const monitorWidth = document.getElementById("monitor").offsetWidth - 20;

  //get the text(span) width
  let spanWidth = document.getElementById("monitorText").offsetWidth;

  //see how code is working!
  console.log(
    `BEFORE: fontSize=${fontSize} , monitorWidth=${monitorWidth} , spanWidth=${spanWidth} , monitorText=${monitorText()} , indexof=${document
      .getElementById("monitorText")
      .innerText.indexOf("\n")}`
  );

  //////////////////////////////////////////////////////////
  //main operations

  //minify text font size in first line!
  if (fontSize > 35) {
    while (spanWidth > monitorWidth) {
      minifyTextFontSize();
      spanWidth = document.getElementById("monitorText").offsetWidth;
    }
  }
  //Enter text after minifying ...
  if (
    fontSize <= 35 &&
    document.getElementById("monitorText").innerText.indexOf("\n") == -1
  ) {
    while (spanWidth > monitorWidth) {
      minifyTextFontSize();
      spanWidth = document.getElementById("monitorText").offsetWidth;
    }
    document.getElementById("monitorText").innerText += "\n";
  }

  //see how code is working!
  console.log(
    `AFTER: fontSize=${parseInt(
      fontSize
    )} , monitorWidth=${monitorWidth} , spanWidth=${spanWidth} , monitorText=${monitorText()} , indexof=${document
      .getElementById("monitorText")
      .innerText.indexOf("\n")}`
  );
};
