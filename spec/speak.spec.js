describe("speak morse", function() {
  let Speak = require('../speak').Speak;
  let speak;
  let led;

  class Gpio {
    constructor(port,direction) {
       this.onOff = [];  
       this.lastWrite= new Date().getTime()-1500;
    }
    writeSync(p) {
      let now =  new Date().getTime();
      let timePassed= Math.floor(Math.round((now-this.lastWrite)/100.0)*100);
      this.onOff.push(timePassed);
      process.stdout.write(p.toString() + "-" + (timePassed) + " ");
      this.lastWrite= new Date().getTime();
    }
    unexport() {
  
    }
  }
    
  beforeEach(function() {
    led = new Gpio(4, 'out');
    speak = new Speak(led);
  });

  it("should be able to speak e", function() {
    speak.text("e");
    led.writeSync(0);
    expect(led.onOff).toEqual([1500,+100,300]);
  });

  it("should be able to speak sos", function() {
    speak.text("sos");
    led.writeSync(0);
    expect(led.onOff).toEqual([1500,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100, 300]);
  });

  it("should be able to speak Nils", function() {
    speak.text("Nils");
    led.writeSync(0);
    expect(led.onOff).toEqual([  1500,+300,100,+100,300,    +100,100,+100,300,     +100,100,+300,100,+100,100,+100,300,    +100,100,+100,100,+100,   300    ]);
  });


});
