
let morseAlpha = new Map();
//morseAlpha.set("-.","n");
//morseAlpha.set("..","i");
//morseAlpha.set(".-..","l");
morseAlpha.set("...","s");
morseAlpha.set("---","o");
let morseStream= "";
function newSignal( lengthOff, lengthOn ) {
    let blanc= "";
    if ( Math.abs(lengthOff-700) < 70  ) { 
        blanc= " ";

    }
    if ( Math.abs(lengthOn-100) < 10 ) {
        morseStream+=".";
    } else {
        morseStream+="-";
    }
   
   let chr= morseAlpha.get(morseStream);
   if (chr!=undefined) {
       console.log(chr);
       morseStream= "";
       return blanc+chr;
   } 

   return blanc;
}


module.exports = newSignal;
