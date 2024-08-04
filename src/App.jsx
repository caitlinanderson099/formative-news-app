import { HashRouter } from "react-router-dom"
import './App.css'

import Header from "./components/nav/Header"
import Footer from "./components/nav/Footer"
import Links from "./routes/Links"

import Home from "./pages/Home"
import About from "./pages/About"


const App = () => {
  

  return (
    <>
      <HashRouter>
        <Header/>
        <Links/>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App
