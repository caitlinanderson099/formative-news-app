import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Home from '../pages/Home'
import About from '../pages/About'

const Links = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default Links
