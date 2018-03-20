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

  text(message) {
    message = message.toLowerCase();
    for (let i=0; i<message.length; i++) {
      let cCode= message.charCodeAt(i);
      if (cCode== 32) { 
        sleep.msleep(this.betweenWords);
      } else {
        let c = cCode -97;  
        let mCode = this.morseCode[c];
        for (let s=0; s<mCode.length; s++){
          let signal=mCode[s];
          if (signal=="-"){
            this.longSignal();
          } else{
            this.shortSignal();
          }
        }
        sleep.msleep(this.betweenCharacters-this.betweenElements);
      }
    } 
  }
}

exports.Speak = Speak;

