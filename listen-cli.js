let newSignal = require('./listen');


let Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
let pushButton = new Gpio(17, 'in', 'both');
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
    } else {
        lengthOn = now - lastPush;
    }
    lastPush = now;
  });