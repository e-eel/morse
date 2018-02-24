
let onOff=[+100,100,+100,100,+100,100,+300,100,+300,100,+300,100,+100,100,+100,100,+100,700];
let morseAlpha = new Map();
morseAlpha.set("...","s");
morseAlpha.set("---","o");
let morseStream= "";
function newSignal(length) {
    if (length==100) {
        morseStream+=".";
    } else {
        morseStream+="-";
    }
   let chr= morseAlpha.get(morseStream);
   if (chr!=undefined) {
       console.log(chr);
       morseStream= "";
   } 


}
for(i=0;i<onOff.length;i+=2){
    newSignal(onOff[i]);
}