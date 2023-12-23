const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


const nums = [2,3,9,7]

// const tot = nums.reduce(function (acc, currval){
//     return acc + currval
// },0)

//console.log(tot);

// const tot = nums.reduce((acc, curr)=> (acc + curr),1)
// console.log(tot);

let ans=0
nums.forEach((no)=>{
    //console.log(ans);
    ans=no + ans;
})

//console.log(ans);


const cart = [212,36,222,44]

let price = cart.reduce((acc,prices)=> acc + prices,1)

// console.log(price);