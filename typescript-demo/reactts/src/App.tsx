import './App.css'
import { ChaiCard } from './components/ChaiCard'

function App() {

  return (
    <>
      <div>Starting React with Typescript</div>

      <ChaiCard name = "Laptop" price = {85000} />
      <ChaiCard name = "Mobile" price = {30000} />
    </>
  )
}

export default App
