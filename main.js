/*const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Prayer.png") {
    myImage.setAttribute("src", "images/Masterpiece1.png");
  } else {
    myImage.setAttribute("src", "images/Prayer.png");
  }
};*/

/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/

/*document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });*/

//Add a button on the HTML page and when the button is clcked the Header(h1) will change
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
    setUserName();
  };