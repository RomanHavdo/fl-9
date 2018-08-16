const a = Number(prompt('a length='));
const b = Number(prompt('b length='));
const angle = Number(prompt('angle='));
const radianToDeg = 180;

let isValid = function(number) {
    if (isNaN(number)) {
        return true;
    }
    if (number <= 0) {
        return true;
    }
}
let checkZeros = function(number) {
    number = Math.round(number * 100) / 100;
    return number;
}
if (isValid(a) || isValid(b) || isValid(angle)) {
    console.log('Invalid data');
}else {
    const c = Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(Math.PI * angle / radianToDeg)));
    const triagleSquare=Math.round(1 / 2 * a * b * Math.sin(Math.PI * angle / radianToDeg));
    if(c<=0 || triagleSquare<=0){
        console.log('Invalid data');
    }else{
       console.log(` 
        c length: ${+checkZeros(c)} 
        Triangle square: ${+checkZeros(triagleSquare)}
        Triangle perimeter: ${+checkZeros(a + b + c)}
    `); 
    }
}
