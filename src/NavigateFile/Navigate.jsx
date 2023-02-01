import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/aubout/About'
import Home from '../pages/homes/home'


function Navigate() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About Us' element={<About/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default Navigate