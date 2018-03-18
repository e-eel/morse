let sleep = require('sleep');

class Speak {
  
  constructor(LED) {
    this.LED = LED;
    this.dotLength =100
    this.betweenElements =1*this.dotLength; 
    this.dash =3*this.dotLength;
    this.dot =1*this.dotLength;
    this.betweenCharacters =3*this.dotLength; 
    this.betweenWords =7*this.dotLength
    this.morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  }

  longSignal() { 
    this.LED.writeSync(1);
    sleep.msleep(this.dash);
    this.LED.writeSync(0); 
    sleep.msleep(this.betweenElements);
  }

  shortSignal() { 
    this.LED.writeSync(1);
    sleep.msleep(this.dot);
    this.LED.writeSync(0); 
    sleep.msleep(this.betweenElements);
  }
}

exports.Speak = Speak;

