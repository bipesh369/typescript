import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList.tsx'
import { Counter } from './components/Counter'
 import type { Chai } from "./types.ts"


 const menu: Chai[] = [
  {id: 1, name: "Masala", price: 30},
  {id: 2, name: "Ginger", price: 50},
  {id: 1, name: "Lemon", price: 60},
 ]

function App() {

  return (
    <>
      <div>
        <h1>Starting React with Typescript</h1>
        <ChaiCard name = "Laptop" price = {85000} />
      <ChaiCard name = "Mobile" price = {30000} />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>

     </>
  )
}

export default App
