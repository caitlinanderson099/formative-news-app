import './App.css'
import { HashRouter, Link } from "react-router-dom"
import Links from './routes/Links'
import { ArticleContextProvider } from './components/context/ArticleContext'

import Header from "./components/nav/Header"
import Footer from "./components/nav/Footer"


const App = () => {
  

  return (
    <>
      <HashRouter>
        <ArticleContextProvider>
        <Header/>
        <Links/>
        <Footer/>
        </ArticleContextProvider>
      </HashRouter>
    </>
  )
}

export default App
