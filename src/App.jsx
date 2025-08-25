import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  const userName = "Usman"
  const course = "React JS"

  const handleClick = () => {
    console.log("Button is Clicked")

  }

  const [count, setCount] = useState(0)

  const [name, setName] = useState("")


  return (


    <>

      {/* JSX */}
      <h1>Hello {userName}</h1>
      <h1>Welcome to {course}</h1>


      {/* COMPONENTS */}
      <Header />
      <Body />
      <Footer />

      {/* EVENTS */}
      <button onClick={handleClick}>Click</button>

      {/* USESTATE */}
      <h1>Counter:{count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>


      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>

      <h1>Hello{name}</h1>
      <input type="text" onChange={(e) => {
        setName(e.target.value)
      }} />








    </>
  )
}

export default App
