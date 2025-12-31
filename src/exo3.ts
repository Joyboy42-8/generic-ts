interface Identifiable {
    id: number
}

interface User {
    id: number;
    name: string;
}

class EntityStorage<T extends Identifiable> {
    constructor(private items: T[] = []) {}

    addItem(item: T): void {
        this.items.push(item);
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    getItems(): T[] {
        return this.items;
    }
}

const users = new EntityStorage<User>();

users.addItem({ id: 1, name: "Alice" });
users.addItem({ id: 2, name: "Bob" });

console.log(users.findById(1)); // ✅ { id: 1, name: "Alice" }

users.removeItemById(1);
console.log(users.getItems()); // ✅ [{ id: 2, name: "Bob" }]