/*
This JavaScript program converts English letters to Morse Code according
to the table below:

Letter  Morse

A	      .-
B	      -...
C	      -.-.
D	      -..
E	      .
F	      ..-.
G	      --.
H	      ....
I	      ..
J	      .---
K	      -.-
L	      .-..
M	      --
N	      -.
O	      ---
P	      .--.
Q	      --.-
R	      .-.
S	      ...
T	      -
U	      ..-
V	      ...-
W	      .--
X	      -..-
Y	      -.--
Z	      --..
0	      -----
1	      .----
2	      ..---
3	      ...--
4	      ....-
5	      .....
6	      -....
7	      --...
8	      ---..
9	      ----.

*/



var userInput;
var convertedUserInput;
var morseCodeArray;

userInput = prompt("Please enter your name", " ");


userInput = userInput.toUpperCase();
//console.log(userInputArray);

function morseCodeConversion(input) {
  input = input.replace(/A/g,".-");
  input = input.replace(/B/g,"-...");
  input = input.replace(/C/g,"-.-.");
  input = input.replace(/D/g,"-..");
  input = input.replace(/E/g,".");
  input = input.replace(/F/g,"..-.");
  input = input.replace(/G/g,"--.");
  input = input.replace(/H/g,"....");
  input = input.replace(/I/g,"..");
  input = input.replace(/J/g,".---");
  input = input.replace(/K/g,"-.-");
  input = input.replace(/L/g,".-..");
  input = input.replace(/M/g,"--");
  input = input.replace(/N/g,"-.");
  input = input.replace(/O/g,"---");
  input = input.replace(/P/g,".--.");
  input = input.replace(/Q/g,"--.-");
  input = input.replace(/R/g,".-.");
  input = input.replace(/S/g,"...");
  input = input.replace(/T/g,"-");
  input = input.replace(/U/g,"..-");
  input = input.replace(/V/g,"...-");
  input = input.replace(/W/g,".--");
  input = input.replace(/X/g,"-..-");
  input = input.replace(/Y/g,"-.--");
  input = input.replace(/Z/g,"--..");
  input = input.replace(/0/g,"-----");
  input = input.replace(/1/g,".----");
  input = input.replace(/2/g,"..---");
  input = input.replace(/3/g,"...--");
  input = input.replace(/4/g,"....-");
  input = input.replace(/5/g,".....");
  input = input.replace(/6/g,"-....");
  input = input.replace(/7/g,"--...");
  input = input.replace(/8/g,"---..");
  input = input.replace(/9/g,"----.");
  input = input.replace(/ /g,"/");
  return input;
};

console.log(morseCodeConversion(userInput));
