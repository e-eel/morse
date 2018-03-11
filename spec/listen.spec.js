describe("listen morse", function() {
  let newSignal = require('../listen');
  
  beforeEach(function() {
  });

  it("should be able to listen to sos with exact timings", function() {
    let onOff=[700,+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos");
  });

  it("should be able to listen to sos with aproximate timings", function() {
    let onOff=[700,+95,100,+105,100,+98,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos");
  });

  it("should be able to listen to sos sos with exact timings", function() {
    let onOff=[700,+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100,
               700,+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos sos");
  });
  it("should be able to listen to sos sos with aproximate timings", function() {
    let onOff=[702,+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100,
               680,+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" sos sos");
  });
  /*
  it("should be able to listen to nils with exact timings", function() {
    let onOff=[700,+300,100,+100];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i],onOff[ i+1 ]);
    }
    expect(result).toBe(" n");
  });
  */
});
