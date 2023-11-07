// ----------TEXT TYPING-----------

var _CONTENT = ["Hey !✌️", "I'm...", "Student✍", "Developer Web⏳"];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#target");
var _CURSOR = document.querySelector("#cursor");

function Type() {

  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

 if (text === _CONTENT[_PART]) {

    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

function Delete() {

  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

_INTERVAL_VAL = setInterval(Type, 100);

// ----------NIGHTMODE-----------

var checkbox = document.getElementById("darkmode"); 
var checkbox2 = document.getElementById("darkmodemobile"); 
if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}
checkbox2.addEventListener("change", function () {
  if (checkbox2.checked) {
    darkmode();
  } else {
    nodark();
  }
});
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    darkmode();
  } else {
    nodark();
  }
});
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
  checkbox2.checked = true;
  checkbox.checked = true; 
  sessionStorage.setItem("mode", "dark"); 
}
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
  ); 
  document.documentElement.style.setProperty(
    "--color5",
    "rgba(255, 255, 255, 0.925)"
  );
  checkbox2.checked = false; 
  checkbox.checked = false; 
  sessionStorage.setItem("mode", "light"); 
}

// ----------HAMBURGER-----------
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
