// interfaces define structure of objects

interface Chai{
  flavour: string
  price: number
  milk?: boolean
}

const masala: Chai = {
  flavour: "masala",
  price: 20,
  milk: false,
}

interface Shop {
  readonly id: number
  name: string
}

const s: Shop = {
  id: 1,
  name: "Chaiya"
}



interface DiscountCalculation{
  (price: number): Number
}
const apply50: DiscountCalculation = (p) => p * 0.5



interface TeaMachine{
  start(): void
  stop(): void
}

const machine: TeaMachine = {
  start(){
    console.log("start")
  },
  stop() {
    console.log("stop")
  },

}


//merging
interface User {
  name: string
}

interface User {
  age: number
}

const u: User = {
  name: "Bipesh",
  age: 22
}


// extends
interface A {a: string}
interface B {b: string}

interface C extends A, B {}