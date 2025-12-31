"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityStorage {
    items;
    constructor(items = []) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
    removeItemById(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    getItems() {
        return this.items;
    }
}
const users = new EntityStorage();
users.addItem({ id: 1, name: "Alice" });
users.addItem({ id: 2, name: "Bob" });
console.log(users.findById(1)); // ✅ { id: 1, name: "Alice" }
users.removeItemById(1);
console.log(users.getItems()); // ✅ [{ id: 2, name: "Bob" }]
//# sourceMappingURL=exo3.js.map