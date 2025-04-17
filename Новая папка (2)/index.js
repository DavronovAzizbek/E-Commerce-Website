const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}