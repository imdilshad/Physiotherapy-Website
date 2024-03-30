import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head1 from './Components/Header/Head1'
import Home from './Components/Home/Home'
import Home2 from './Components/Home/Home2'
import Home3 from './Components/Home/Home3'
import Home4 from './Components/Home/Home4'
import Home5 from './Components/Home/Home5'
import Home6 from './Components/Home/Home6'
import Home7 from './Components/Home/Home7'
import Home8 from './Components/Home/Home8'
import Home9 from './Components/Home/Home9'
import Footer1 from './Components/Footer/Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head1/>
    <Home/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
    <Home6/>
    <Home7/>
    <Home8/>
    <Home9/>
    <Footer1/>
    </>
  )
}

export default App
