import { Route, Routes } from "react-router-dom"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import SingleArticle from "../components/pages/SingleArticle"


const Links = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/article/:id" element={<SingleArticle/>}/>
      </Routes>
    </>
  )
}

export default Links
