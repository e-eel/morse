var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO



let arguments = process.argv.slice(2);
if (!arguments.length) {
    console.log("expected message");
    process.exit(1);
}
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

let message = arguments[0];
message = message.toLowerCase().replace(/[^a-z]/g, "");
for (let i=0; i<message.length; i++) {
  let c = message.charCodeAt(i)-97;  
  console.log(c);
  let mCode = morseCode[c];
  console.log(mCode);
}

console.log(": "+message);
function short() {
  process.stdout.write(".");
}
function long() {
  process.stdout.write("-");
}
short();short();short();long();long();long();short();short();short();

/*
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms


function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds
*/
