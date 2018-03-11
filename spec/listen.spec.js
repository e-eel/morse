describe("listen morse", function() {
  let newSignal = require('../listen');
  
  beforeEach(function() {
  });

  it("should be able to listen to sos with exact timings", function() {
    let onOff=[+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100,700];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i]);
    }
    expect(result).toBe("sos");
  });
/*
  it("should be able to listen to sos with aproximate timings", function() {
    let onOff=[+95,100,+105,100,+98,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100,700];
    let result = "";
    for(i=0;i<onOff.length;i+=2){
      result += newSignal(onOff[i]);
    }
    expect(result).toBe("sos");
  });
*/
});
