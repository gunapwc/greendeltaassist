import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/aubout/About'
import Header from '../component/header/header';
import Footer from '../pages/footer/footer';
import Partner from '../pages/partner/partner';
import Supplier from '../pages/supplier/supplier';
import BlogMain from '../pages/blogMain/BlogMain'
import StoreLocator from '../pages/storeLocator/StoreLocator'
import Blog from '../pages/blog/Blog'
import Home from '../pages/homes/home'
import OurServices from '../pages/ourservices/OurServices';
// import StoreLocator from '../pages/store locator/storeLocator';
import ProductCategories from '../pages/productCategories/ProductCategories'
import NewsRoom from '../pages/newsroom/newsroom';
import News from '../pages/news/news';
import RegisterIntrestPage from '../pages/partner/registerIntrestPage';
import ProductRegistration from '../pages/partner/productregistration';


function Navigate() {
  return (
    <>
      <BrowserRouter basename="/greendeltaassist" >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-Us' element={<About />} />
          <Route path='/partner'>
            <Route path='' element={<Partner />} />
            <Route path="registerInterest" element={<RegisterIntrestPage />} />
            <Route path="productRegistration" element={<ProductRegistration />} />
          </Route>
          <Route path='/blog-main' element={<BlogMain />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/product-categories' element={<ProductCategories />} />
          <Route path='/store-locator' element={<StoreLocator />} />
          <Route path='/our-services' element={<OurServices />} />
          <Route path='/newsroom' element={<NewsRoom />} />
          <Route path='/news'>
            <Route path=':id' element={<News />} />
          </Route>
        </Routes>

        <div style={{ height: "100px" }}></div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default Navigate