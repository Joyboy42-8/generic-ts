"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStorage {
    item;
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
}
const numberStorage = new DataStorage(0);
numberStorage.setItem(42);
console.log(numberStorage.getItem()); // ✅ 42
const stringStorage = new DataStorage("default");
stringStorage.setItem("Hello");
console.log(stringStorage.getItem()); // ✅ "Hello"
//# sourceMappingURL=exo1.js.map