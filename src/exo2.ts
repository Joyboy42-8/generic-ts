class DataStorage<T> {
    
    constructor(private items: T[] = []) {}

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(it => it !== item);
    }

    getItems(): T[] {
        return this.items;
    }
}


const numbers = new DataStorage<number>();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getItems()); // ✅ [20]

const words = new DataStorage<string>();
words.addItem("Alice");
words.addItem("Bob");
words.removeItem("Alice");
console.log(words.getItems()); // ✅ ["Bob"]