// Variablen für die Fareben erstellen
let color_one, color_two, color_three, color_four, color_five, color_six
const Code = document.querySelector(".Content .Top .Value .Values");


// Funktion Zufällige RGB Werte generieren
function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor
}

// Die Funktion auf die verschiedenen Farb-Variablen übertragen
color_one = randomRGB();
color_two = randomRGB();
color_three = randomRGB();
color_four = randomRGB();
color_five = randomRGB();
color_six = randomRGB();

// Eine Zufällige Variable zum Gewinner erklären

color_Array = [color_one, color_two, color_three, color_four, color_five, color_six]
chosen_color = color_Array[Math.floor(Math.random() * 5)];
console.log(chosen_color)

time_el.innerText = `${hrs}:${mins}:${secs}`;


// Variablen in HTML übertragen
var B_one = document.getElementById("one").style.backgroundColor = color_one;
var B_tow = document.getElementById("two").style.backgroundColor = color_two;
var B_three = document.getElementById("three").style.backgroundColor = color_three;
var B_four = document.getElementById("four").style.backgroundColor = color_four;
var B_five = document.getElementById("five").style.backgroundColor = color_five;
var B_six = document.getElementById("six").style.backgroundColor = color_six;



