let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let sleep = require('sleep');
let Speak = require('./speak').Speak;

let LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
let speak = new Speak(LED);
let arguments = process.argv.slice(2);
if (!arguments.length) {
    console.log("expected message");
    process.exit(1);
}
let message = arguments[0];
message = message.toLowerCase().replace(/[^a-z ]/g, "");

while (true) {
  //console.log("--------------");
  speak.text(message);
  //console.log("--------------");
  
}

LED.writeSync(0); // Turn LED off
LED.unexport(); // Unexport GPIO to free resources

console.log("");

process.exit(0);

