import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  )
}

export default App
