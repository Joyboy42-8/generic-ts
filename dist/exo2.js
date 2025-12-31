"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStorage {
    items;
    constructor(items = []) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(it => it !== item);
    }
    getItems() {
        return this.items;
    }
}
const numbers = new DataStorage();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getItems()); // ✅ [20]
const words = new DataStorage();
words.addItem("Alice");
words.addItem("Bob");
words.removeItem("Alice");
console.log(words.getItems()); // ✅ ["Bob"]
//# sourceMappingURL=exo2.js.map