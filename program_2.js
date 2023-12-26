// let a = 10
// const b = 20
// var c = 30

// let obj = {}
// console.log(Object.keys(obj).length)

let obj1 = [{
    "fr":"France",
    "in":"India",
    "np":"Nepal",
    "us":"United State"
},
{
    "fr":"+32",
    "in":"+91",
    "np":"+94",
    "us":"+1"
}
]

obj1.forEach((item, index, obj)=> {
    console.log(index)
    console.log(obj)
    console.log(`${item.fr} and ${item.in}`)
}) 


// map
// reduce
// forEach
// filter
