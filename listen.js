
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
       return chr;
   } 

   return "";
}


module.exports = newSignal;
