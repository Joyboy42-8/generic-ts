function combine<U, T extends { length: number } =  string>(
    a: T, 
    b: U
): [T, U] {
    console.log(`Size of first element : ${a.length}`);
    return [a, b];
}

const resultA = combine<number, string>("Lucas", 42);
// const resultB = combine<string, string>("true", "yes");

// console.log(resultA, resultB);
console.log(resultA);