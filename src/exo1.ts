interface DSType<T>  {
    item: T
}

class DataStorage<T> implements DSType<T> {
    constructor(public item: T) {}

    getItem(): T {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const numberStorage = new DataStorage<number>(0);
numberStorage.setItem(42);
console.log(numberStorage.getItem()); // ✅ 42

const stringStorage = new DataStorage<string>("default");
stringStorage.setItem("Hello");
console.log(stringStorage.getItem()); // ✅ "Hello"