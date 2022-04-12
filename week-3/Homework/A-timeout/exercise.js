/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)


const timeOut = setTimeout(backgroundColor, 5000)

function backgroundColor(){
    const bodyColor = document.querySelector("body")
    bodyColor.style.backgroundColor = "pink"
}

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const colorInterval = setInterval(cambioColor, 5000);

function cambioColor() {
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = bodyColor.style.backgroundColor == "pink" ? "grey" : "pink";
}

function stopColor() {
  clearInterval(colorInterval);
}
