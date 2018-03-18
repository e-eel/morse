describe("listen morse", function() {
  let newSignal = require('../listen');
  
  beforeEach(function() {
    let morseStream= "";
  });

  it("should be able to listen to sos with exact timings", function() {
    let onOff=[1500,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100, 300,0 ];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos");
  });

  it("should be able to listen to sos with aproximate timings", function() {
    let onOff=[1500,+95,100,+105,100,+98, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100, 300,0];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos");
  });

  it("should be able to listen to sossos with exact timings", function() {
    let onOff=[1500,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100,
               300,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100,300,0];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sossos");
  });
  it("should be able to listen to sos sos with aproximate timings", function() {
    let onOff=[1500,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100,
               680,+100,100,+100,100,+100, 300,+300,100,+300,100,+300, 300,+100,100,+100,100,+100, 300,0];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos sos");
  });
  
  it("should be able to listen to nils with exact timings", function() {
    let onOff=[1500,+300,100,+100,300,    +100,100,+100,300,     +100,100,+300,100,+100,100,+100,300,    +100,100,+100,100,+100,   300,0];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" nils");
  });
  
  it("should be able to listen to real nils with real timings", function() {
    let onOff=[       //17478,0,
              17478,+300,106,+101,300,   +101,101,+100,300,     +101,100,+300,101,+100,101,+100,301,    +100,100,+100,802,100,
    ];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" nils");
  });
  
});
