
let morseAlpha = new Map();
morseAlpha.set("-.","n");
//morseAlpha.set("..","i");
morseAlpha.set(".-..","l");
morseAlpha.set("...","s");
morseAlpha.set("---","o");
let morseStream= "";
function newSignal( lengthOff, lengthOn ) {
    if ( lengthOff >= 1500*0.9 ) { 
        morseStream= "";
    }

    let recognizedCharacters = "";
    if ( lengthOff >= 700*0.9 ) { 
        recognizedCharacters= " ";
    }
   
    if (  lengthOff >= 300*0.9 ) {
        let chr= morseAlpha.get(morseStream);
        if (chr!=undefined) {
            console.log(chr);
            morseStream= "";
            recognizedCharacters = chr+recognizedCharacters;
        } 
    }

    if ( Math.abs(lengthOn-100) < 10 ) {
        morseStream+=".";
    } else {
        morseStream+="-";
    }
   
   
   return recognizedCharacters;
}


module.exports = newSignal;
