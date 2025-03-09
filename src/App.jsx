import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Landing from './LandingPage/Landing.jsx'
import Products from './Products/Product.jsx'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <div><Navbar /></div> */}
      
      <div><Landing /></div>
      <div><Products /></div>
      {/* <div><Footer /></div> */}
    </>
  )
}

export default App
