import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/aubout/About'
import Header from '../component/header/header';
import Footer from '../pages/footer/footer';
import Partner from '../pages/partner/partner';
import BlogMain from '../pages/blogMain/BlogMain'
import StoreLocator from '../pages/storeLocator/StoreLocator'
import Home from '../pages/homes/home'
import OurServices from '../pages/ourservices/OurServices';
import StoreLocator from '../pages/store locator/storeLocator';
import ProductCategories from '../pages/productCategories/ProductCategories'


function Navigate() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div style={{height:"100px"}}></div> 
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-Us' element={<About/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/blog-main' element={<BlogMain/>}/>  
        <Route path='/product-categories' element={<ProductCategories/>}/>
        <Route path='/store-locator' element={<StoreLocator/>}/>
        <Route path='/Our Services' element={<OurServices/>}/>
    </Routes>

    <div style={{height:"100px"}}></div> 
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default Navigate