var globalVar = "I'm a global variable"; 
let globalLet = "I'm a global variable too, but scoped with let";
const globalConst = "I'm a global constant";

{
    var blockVar = "I'm a block-scoped variable";
    let blockLet = "Iam a block-scoped  let";
    const blockConst = "I'am a block-scoped constant";
    console.log("test " + globalVar);
    console.log("test " + globalLet);
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

/**console.log(blockVar);
try {
    console.log(blockLet);
} catch(message) {
    console.log("erreur " + message);
}
console.log(blockConst);
**/

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError