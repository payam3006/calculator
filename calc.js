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
