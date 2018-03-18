let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let sleep = require('sleep');
let Speak = require('./speak').Speak;
/*class Gpio {
  constructor(port,direction){}
  writeSync(p) {
    process.stdout.write(p.toString());
  }
  unexport() {

  }
}
*/
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
  for (let i=0; i<message.length; i++) {
    let cCode= message.charCodeAt(i);
    if (cCode== 32) { 
      console.log(" ");
      sleep.msleep(Speak.betweenWords);
      
    } else {

      let c = cCode -97;  
      //console.log(c);
      let mCode = speak.morseCode[c];
      process.stdout.write(mCode);
      for (let s=0; s<mCode.length; s++){
        let signal=mCode[s];
        if (signal=="-"){
          speak.longSignal();
        } else{
          speak.shortSignal();
        }
      }
      console.log(" ");
    }
  }
  sleep.msleep(speak.betweenWords);

  break;
}

//console.log("--------------");
LED.writeSync(0); // Turn LED off
LED.unexport(); // Unexport GPIO to free resources

console.log("");

process.exit(0);

