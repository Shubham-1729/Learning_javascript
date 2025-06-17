const myNums = [1, 2, 3, 4]

// const Total = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const Total = myNums.reduce( (acc, currval) => acc + currval, 0 )
console.log(Total);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py cousre",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12999
    }
]

const PriceToPay = shoppingCart.reduce ( (acc, item) =>acc + item.price, 0 )

console.log(PriceToPay);
