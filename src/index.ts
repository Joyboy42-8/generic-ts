function getFirstElement<Type>(table: Type[]): Type {
    return table[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["Alice", "Bob", "John"]));
console.log(getFirstElement<boolean>([true, false, true]));