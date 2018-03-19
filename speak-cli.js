// usage: e.g. node speak-cli.js -c -l -m "s o s"

let sleep = require('sleep');
let Speak = require('./speak').Speak;
var program = require('commander');
program
  .version('0.0.1')
  .option('-m, --message [message]', 'a message to publish', 'sos')
  .option('-g, --gpio [gpio]', 'publish to GPIO 1-25', 4)
  .option('-c, --console', 'publish console instead of GPIO', false)
  .option('-l, --loop', 'publish in a endless loop', false)
  .parse(process.argv);

let LED;
if (program.console) {
  class Gpio {
    constructor(port,direction) {}
    writeSync(p) {
      process.stdout.write(p.toString()+"\n");
    }
    unexport() {}
  }
  LED = new Gpio(program.gpio, 'out'); 
} else {
  let Gpio = require('onoff').Gpio; 
  LED = new Gpio(program.gpio, 'out'); 
}

let speak = new Speak(LED);

message = program.message.toLowerCase().replace(/[^a-z ]/g, "");

do {
  speak.text(message);
} while (program.loop);

LED.writeSync(0); // Turn LED off
LED.unexport(); // Unexport GPIO to free resources

process.exit(0);

