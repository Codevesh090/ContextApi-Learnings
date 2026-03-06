import { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/CounterContext'

const App = () => {
  const counterContext = useContext(CounterContext)

  return (
    <div className='App'>
      <h1>Count is {counterContext.count}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
//3rd Step
//Now ab kyuki sabhi components have a persistent connection with the context or db . So now we just we import the CounterContext and useContext and then useContext ka use karke context me jitne bhi key-value pairs pade hai unhe laakar hum ek variable me save kar deta hai like here we did |🟨 const counterContext = useContext(CounterContext) 🟨| and then use that variable to spread data accross .
//To see more example , see how we used took data from central db and used it in Navbar.jsx



//Learning Summary -----------------------------------------------------------------------------
//Sabse pehle Hum ab database banayenge and ek stable connection establish karenge .
//Uske baad jise bhi data chahiye wo us context ko import karega and then useContext ka use karke wo saare key-value pairs or data ek variable me save kar lenge as object and then use anywhere we want . 
