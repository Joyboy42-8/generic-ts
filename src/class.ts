interface ContainerT<T> {
    value: T
}

class Container<T> implements ContainerT<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }
}

const numberContainer = new Container<number>(42);
const stringContainer = new Container<string>("Hello");

console.log(numberContainer.getValue());
console.log(stringContainer.getValue());