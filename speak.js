let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let sleep = require('sleep');

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
let dotLength =100
let betweenElements =1*dotLength; 
let dash =3*dotLength;
let dot =1*dotLength;
let betweenCharacters =3*dotLength; 
let betweenWords =7*dotLength
let arguments = process.argv.slice(2);

function longSignal() { 
  LED.writeSync(1);
  sleep.msleep(dash);
  LED.writeSync(0); 
  sleep.msleep(betweenElements);
}
function shortSignal() { 
  LED.writeSync(1);
  sleep.msleep(dot);
  LED.writeSync(0); 
  sleep.msleep(betweenElements);
}

if (!arguments.length) {
    console.log("expected message");
    process.exit(1);
}
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

let message = arguments[0];
message = message.toLowerCase().replace(/[^a-z ]/g, "");

while (true) {
  //console.log("--------------");
  for (let i=0; i<message.length; i++) {
    let cCode= message.charCodeAt(i);
    if (cCode== 32) { 
      console.log(" ");
      sleep.msleep(betweenWords);
      
    } else {

      let c = cCode -97;  
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
      console.log(" ");
    }
  }
  sleep.msleep(betweenWords);
}

//console.log("--------------");
LED.writeSync(0); // Turn LED off
LED.unexport(); // Unexport GPIO to free resources

console.log("");

process.exit(0);

