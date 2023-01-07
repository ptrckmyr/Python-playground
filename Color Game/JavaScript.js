// Variablen für die Fareben erstellen
let color_one, color_two, color_three, color_four, color_five, color_six
var chosen_square
const Code = document.querySelector(".Content .Top .Value .Values");


// Funktion Zufällige RGB Werte generieren
function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + ", " + y + ", " + z + ")";  
  return RGBColor
}

// Die Funktion auf die verschiedenen Farb-Variablen übertragen 
color_one = randomRGB(); color_two = randomRGB(); color_three = randomRGB();
color_four = randomRGB(); color_five = randomRGB(); color_six = randomRGB();

// Eine Zufällige Variable zum Gewinner erklären

color_Array = [color_one, color_two, color_three, color_four, color_five, color_six]
var num = Math.floor(Math.random() * 5)
console.log (num)
shown_color = color_Array[num];
document.getElementById("Values").innerHTML = shown_color

document.getElementById("one").innerHTML = color_one; document.getElementById("two").innerHTML = color_two; document.getElementById("three").innerHTML = color_three;
document.getElementById("four").innerHTML = color_four; document.getElementById("five").innerHTML = color_five; document.getElementById("six").innerHTML = color_six;


// Variablen (Farben) in HTML übertragen
var B_one = document.getElementById("one").style.backgroundColor = color_one; var B_tow = document.getElementById("two").style.backgroundColor = color_two;
var B_three = document.getElementById("three").style.backgroundColor = color_three; var B_four = document.getElementById("four").style.backgroundColor = color_four;
var B_five = document.getElementById("five").style.backgroundColor = color_five; var B_six = document.getElementById("six").style.backgroundColor = color_six;

document.getElementById("one").style.color = color_one; document.getElementById("two").style.color = color_two;
document.getElementById("three").style.color = color_three; document.getElementById("four").style.color = color_four;
document.getElementById("five").style.color = color_five; document.getElementById("six").style.color = color_six;


function change(){
  var chosen_square = document.getElementById("one").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function change2(){
  var chosen_square = document.getElementById("two").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function change3(){
  var chosen_square = document.getElementById("three").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function change4(){
  var chosen_square = document.getElementById("four").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function change5(){
  var chosen_square = document.getElementById("five").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function change6(){
  var chosen_square = document.getElementById("six").style.backgroundColor; 
  console.log(chosen_square)
  console.log(shown_color)
  Test()
}

function Test () {
  if (shown_color == chosen_square) {
    console.log("YAS")
    //alert("YAS")
  }
  else {
    console.log("Noo")
    //alert("No Du Hoe")
  }
    
}

