// Variablen für die Fareben erstellen
let color_one, color_two, color_three, color_four, color_five, color_six

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor
}

color_one = randomRGB();
color_four = "rgb(166,193,78)";


// Variablen in HTML übertragen
var B_one = document.getElementById("one").style.backgroundColor = color_one;
var B_tow = document.getElementById("two").style.backgroundColor = color_two;
var B_three = document.getElementById("three").style.backgroundColor = color_three;
var B_four = document.getElementById("four").style.backgroundColor = color_four;
var B_five = document.getElementById("five").style.backgroundColor = color_five;
var B_six = document.getElementById("six").style.backgroundColor = color_six;



