import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/aubout/About'
import Header from '../component/header/header';
import Footer from '../pages/footer/footer';
import Partner from '../pages/partner/partner';
import Home from '../pages/homes/home'
import OurServices from '../pages/ourservices/OurServices';
import StoreLocator from '../pages/store locator/storeLocator';

function Navigate() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div style={{height:"100px"}}></div> 
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About Us' element={<About/>}/>
        <Route path='/Partner' element={<Partner/>}/>
        <Route path='/Our Services' element={<OurServices/>}/>
        <Route path='/Store Locator' element={<StoreLocator/>}/>
    </Routes>
    <div style={{height:"100px"}}></div> 
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default Navigate