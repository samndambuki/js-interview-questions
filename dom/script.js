//DOM - a map of everyhting inside a web page. just like a blue print of a house
//SCENARIO - you have a house
//house has rooms - sections
//each room has furniture - just like a web page has text,buttons,images
//you can re arrange furniture, turn lights on or off, open or close windows

//html is the house plan(shows where things go)
//css is like painting the walls and decorating
//js is like a remote control that moves things around

//get elements from the dom
let title = document.getElementById("title");
let textButton = document.getElementById("change-text");
let colorButton = document.getElementById("change-color");

//change text when button is clicked
textButton.addEventListener("click", function () {
  title.innerText = "Hello,Javascript";
});

//change color when button is clicked
colorButton.addEventListener("click", function () {
  title.style.color = title.style.color === "blue" ? "red" : "blue";
});
