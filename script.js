// ----------TEXT TYPING-----------

var _CONTENT = ["Hey !✌️", "I'm...", "Student✍", "Developer Web⏳"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#target");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

// ----------NIGHTMODE-----------

var checkbox2 = document.getElementById("darkmode"); //get the checkbox to a variable
//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode2(); //if dark mode was on, run this funtion
} else {
  nodark2(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox2.addEventListener("change", function () {
  //check if the checkbox is checked or not
  if (checkbox2.checked) {
    darkmode2(); //if the checkbox is checked, run this funtion
  } else {
    nodark2(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode2() {
  document.body.classList.add("dark-mode");
  document.documentElement.style.setProperty("--color1", "#ffffff");
  document.documentElement.style.setProperty("--color2", "#d8d8d8");
  document.documentElement.style.setProperty("--color4", "#0f0f0f");
  document.documentElement.style.setProperty("--color6", "#2d2d2d");
  document.documentElement.style.setProperty("--color5", "rgb(0 0 0 / 93%)");
  document.documentElement.style.setProperty("--color7", "#0f0f0fda");
  document.documentElement.style.setProperty(
    "--color8",
    "rgba(0, 0, 0, 0.119)"
  ); //add a class to the body tag
  checkbox2.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark2() {
  document.body.classList.remove("dark-mode");
  document.documentElement.style.setProperty("--color1", "#2f2f2f");
  document.documentElement.style.setProperty("--color2", "#6c6c6c");
  document.documentElement.style.setProperty("--color4", "#ffffff");
  document.documentElement.style.setProperty("--color6", "#dfdfdf");
  document.documentElement.style.setProperty("--color7", "#ffffffda");
  document.documentElement.style.setProperty(
    "--color8",
    "rgba(243, 243, 243, 0.341)"
  ); //re //remove added class from body tag
  document.documentElement.style.setProperty(
    "--color5",
    "rgba(255, 255, 255, 0.925)"
  );
  checkbox2.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
// ----------NIGHTMODEMOBILE-----------

var checkbox = document.getElementById("darkmode2"); //get the checkbox to a variable
//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function () {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});

//function for checkbox when checkbox is checked
function darkmode() {
  document.body.classList.add("dark-mode");
  document.documentElement.style.setProperty("--color1", "#ffffff");
  document.documentElement.style.setProperty("--color2", "#d8d8d8");
  document.documentElement.style.setProperty("--color4", "#0f0f0f");
  document.documentElement.style.setProperty("--color6", "#2d2d2d");
  document.documentElement.style.setProperty("--color5", "rgb(0 0 0 / 93%)");
  document.documentElement.style.setProperty("--color7", "#0f0f0fda");
  document.documentElement.style.setProperty(
    "--color8",
    "rgba(0, 0, 0, 0.119)"
  );
  //add a class to the body tag
  checkbox.checked = true; //set checkbox to be checked state
  sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode");
  document.documentElement.style.setProperty("--color1", "#2f2f2f");
  document.documentElement.style.setProperty("--color2", "#6c6c6c");
  document.documentElement.style.setProperty("--color4", "#ffffff");
  document.documentElement.style.setProperty("--color6", "#dfdfdf");
  document.documentElement.style.setProperty("--color7", "#ffffffda");
  document.documentElement.style.setProperty(
    "--color8",
    "rgba(243, 243, 243, 0.341)"
  ); //remove added class from body tag
  document.documentElement.style.setProperty(
    "--color5",
    "rgba(255, 255, 255, 0.925)"
  );
  checkbox.checked = false; //set checkbox to be unchecked state
  sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
// ----------HAMBURGER-----------
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
