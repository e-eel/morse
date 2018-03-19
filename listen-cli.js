let newSignal = require('./listen');

var program = require('commander');
program
  .version('0.0.1')
  .option('-g, --gpio [gpio]', 'listen to GPIO 1-25', 17)
  .option('-c, --console', 'listen to console instead of GPIO', false)
  .parse(process.argv);

let pushButton;
if (program.console) {
  class Gpio {
    constructor(port,direction,both) {
        this.callback;
    }
    watch(callback) {
        this.callback = callback;
    } 
  }
  pushButton = new Gpio(program.gpio, 'in', 'both');
  let readline = require('readline');
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  rl.on('line', function(message){
    for (let i=0; i<message.length; i++) {
        let m=message.charAt(i);
        pushButton.callback("",m);
    }
  });
} else {  
  let Gpio = require('onoff').Gpio; 
  pushButton = new Gpio(program.gpio, 'in', 'both');
}

let lastPush= new Date().getTime();
let lengthOff=1500;
let lengthOn=0;

pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    //LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
    let now= new Date().getTime();
    console.log(value);
    if (value) {
        lengthOff = now - lastPush;
        console.log(lengthOff + " " + lengthOn);
        result = newSignal(lengthOff,lengthOn);
        console.log(result);
    } else {
        lengthOn = now - lastPush;
    }
    lastPush = now;
  });