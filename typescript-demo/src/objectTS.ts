const chai = {
  name : "Masala chai",
  price: 20,
  isHot: true
}


let tea: {
  name: string;
  price: number;
  isHot: boolean
}
tea = {
  name: "Ginger Tea",
  price: 20,
  isHot: true
}



type Tea = {
  name: string;
  price: number;
  ingredients: string []
}
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"]
}


type Cup = {size: string}
let smallCup: Cup = {size: "250ml"}

let bigCup = {size: "500ml", material: "steel"}
smallCup: bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const ChiaBrew: Brew = coffee


// split out data types 
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
  id: string;
  items: Item[]
  address: Address
}


type Chai = {
  name: string;
  price: number;
  isHot: boolean
}

type ChaiOrder = {
  name?: string;
  quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) =>{
  console.log(order)
}