"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberContainer = new Container(42);
const stringContainer = new Container("Hello");
console.log(numberContainer.getValue());
console.log(stringContainer.getValue());
//# sourceMappingURL=class.js.map