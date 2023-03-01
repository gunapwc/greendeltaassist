import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/aubout/About'
import Header from '../component/header/header';
import Footer from '../pages/footer/footer';
import Partner from '../pages/partner/partner';
import BlogMain from '../pages/blogMain/BlogMain'
import StoreLocator from '../pages/storeLocator/StoreLocator'
import Blog from '../pages/blog/Blog'
import Home from '../pages/homes/home'
import OurServices from '../pages/ourservices/OurServices';
// import StoreLocator from '../pages/store locator/storeLocator';
import ProductCategories from '../pages/productCategories/ProductCategories'
import NewsRoom from '../pages/newsroom/newsroom';
import News from '../pages/news/news';


function Navigate() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-Us' element={<About/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/blog-main' element={<BlogMain/>}/>  
        <Route path='/blog/:id?' element={<Blog/>}/>  
        <Route path='/product-categories' element={<ProductCategories/>}/>
        <Route path='/store-locator' element={<StoreLocator/>}/>
        <Route path='/our-services' element={<OurServices/>}/>
        <Route path='/newsroom' element={<NewsRoom/>}/>
        <Route path='/news'>
          <Route path = ':id' element={<News/>}/>
        </Route>
    </Routes>

    <div style={{height:"100px"}}></div> 
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default Navigate