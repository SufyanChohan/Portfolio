import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*"element={<h1>404 Error</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
