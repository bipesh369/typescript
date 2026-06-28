import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'

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

     </>
  )
}

export default App
