let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let sleep = require('sleep');

/*class Gpio {
  constructor(port,direction){}
  writeSync(p) {
    process.stdout.write(p.toString());
  }
  unexport() {

  }
}*/
let LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
let sigPause =150; 
let long =500;
let short =100;
let wordPause =600; 
let arguments = process.argv.slice(2);

function longSignal() { 
  LED.writeSync(1);
  sleep.msleep(long);
  LED.writeSync(0); 
  sleep.msleep(sigPause);
}
function shortSignal() { 
  LED.writeSync(1);
  sleep.msleep(short);
  LED.writeSync(0); 
  sleep.msleep(sigPause);
}

if (!arguments.length) {
    console.log("expected message");
    process.exit(1);
}
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

let message = arguments[0];
message = message.toLowerCase().replace(/[^a-z]/g, "");

console.log("--------------");
for (let i=0; i<message.length; i++) {
  let c = message.charCodeAt(i)-97;  
  //console.log(c);
  let mCode = morseCode[c];
  process.stdout.write(mCode);
  for (let s=0; s<mCode.length; s++){
    let signal=mCode[s];
    if (signal=="-"){
      longSignal();
    } else{
      shortSignal();
    }
  }
  console.log("");
}

console.log("--------------");
LED.writeSync(0); // Turn LED off
LED.unexport(); // Unexport GPIO to free resources

console.log("");

process.exit(0);

