//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// checker firstTimeGoingOutFromTop
let firstTimeGoingOutFromTop = 0;

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
  document.getElementById("monitorText").style.bottom = "";
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
  backSpaceModify();
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

/////////////////close settingsMenu///////////////////////
document.addEventListener("click", function handleClickOutsideBox(event) {
  const box = document.getElementById("settingsMenue");

  if (!box.contains(event.target)) {
    box.style.display = "none";
    console.log("shit!");
  }
});

////////////////This is shit method for hide menu!!!//////////////////
// const hideMenue = () => {
//   if (document.getElementById("settingsMenue").style.display === "block") {
//     document.getElementById("settingsMenue").style.display = "none";
//   }
//   console.log(document.getElementById("settingsMenue").style.display);
// };

const openSettings = () => {
  document.getElementById("settingsMenue").style.display = "block";
  console.log("is now block!");
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

//minify text font size
const minifyTextFontSize = () => {
  //get the elemnt size!
  const fontSize = getFontSize("monitorText");
  document.getElementById("monitorText").style.fontSize = `${fontSize - 0.1}px`;
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

  //////////////////////////////////////////////////////////
  //main operations

  //minify text font size in first line!
  if (fontSize > 35) {
    while (spanWidth > monitorWidth) {
      minifyTextFontSize();
      spanWidth = document.getElementById("monitorText").offsetWidth;
    }
  }

  //add Enter to text after minifying ...
  if (fontSize <= 35 && spanWidth > monitorWidth) {
    const monitorText = document.getElementById("monitorText").innerText;
    const lastCharacter = monitorText[monitorText.length - 1];
    document.getElementById("monitorText").innerText = monitorText.substring(
      0,
      monitorText.length - 1
    );
    document.getElementById("monitorText").innerText += "\n" + lastCharacter;
  }

  //text going out from top when we reach the bottom of monitor!//////////////////////

  //get the monitor height
  const monitorHeight = document.getElementById("monitor").offsetHeight - 20;

  //get the text(span) height
  const spanHeight = document.getElementById("monitorText").offsetHeight;

  if (spanHeight > monitorHeight - 20) {
    document.getElementById("monitorText").style.bottom = "30px";
  }
  ////////////////////////////////////////////////////////////////////////////////////
};

//raise text font size
const raiseTextFontSize = () => {
  //get the elemnt size!
  const fontSize = getFontSize("monitorText");
  document.getElementById("monitorText").style.fontSize = `${fontSize + 1.1}px`;
};

//backSpace Modifying: analyse and modify monitor text displaying in reverse!!!
function backSpaceModify() {
  //get the monitor height (-20 for setting button)
  const monitorHeight = document.getElementById("monitor").offsetHeight - 20;

  //get the text(span) height
  const spanHeight = document.getElementById("monitorText").offsetHeight;

  //text going top when not filling entire screen
  if (spanHeight < monitorHeight - 20) {
    document.getElementById("monitorText").style.bottom = "";
  }

  let fontSize = getFontSize("monitorText");

  //get the monitor width (assume without padding(10px from left and right))
  let monitorWidth = document.getElementById("monitor").offsetWidth - 20;

  //get the text(span) width
  let spanWidth = document.getElementById("monitorText").offsetWidth;

  // console.log(
  //   fontSize,
  //   monitorText(),
  //   document.getElementById("monitorText").innerText.indexOf("\n")
  // );

  if (
    document.getElementById("monitorText").innerText.indexOf("\n") == -1 &&
    fontSize < 50
  ) {
    while (spanWidth < monitorWidth && fontSize < 50) {
      raiseTextFontSize();
      spanWidth = document.getElementById("monitorText").offsetWidth;
      fontSize = getFontSize("monitorText");
      // console.log(
      //   `fontSize: ${fontSize} , spanWidth: ${spanWidth} , monitorWidth:${monitorWidth} , ${getFontSize(
      //     "monitorText"
      //   )}`
      // );
    }
  }
}
