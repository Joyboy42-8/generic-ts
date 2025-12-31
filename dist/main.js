"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(a, b) {
    console.log(`Size of first element : ${a.length}`);
    return [a, b];
}
const resultA = combine("Lucas", 42);
// const resultB = combine<string, string>("true", "yes");
// console.log(resultA, resultB);
console.log(resultA);
//# sourceMappingURL=main.js.map