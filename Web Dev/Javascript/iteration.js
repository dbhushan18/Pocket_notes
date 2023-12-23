let arr = [2,8,9,15,22];

// arr.forEach((item,index)=>{
// console.log("number", item, index)
// })

let transformed = arr.map((item)=>{
    if(item>10)
        return item;
})

let transformed2 = arr.filter((item)=>{
    if(item>10)
        return item;
})

let conclusion = arr.reduce((sum,item)=>{
    return sum=sum+ item;
},100)
//100 here is initial value

console.log(transformed);
console.log(transformed2);
console.log(conclusion);