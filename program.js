let obj = {
    a : "string",
    "b" : "int",
    e : "xyz@gmail.com"
}

console.log(obj["a"],obj.b)
obj.e = "bdg@gmail.com"
console.log(obj)
// Object.freeze(obj)
obj.e = "is changed"
console.log(obj)

obj.fun = function() {
    console.log(`This is the function ${this.b}`)
}

console.log(obj.fun)
obj.fun()

console.log(Array.from(Object.values(obj)))

console.log(obj.hasOwnProperty('a'))

let o = {
    a : "1",
    2 : "b"
}

const {a: n} = o

console.log(n);

function myfun(...num) {
    console.log(num);
}

myfun()