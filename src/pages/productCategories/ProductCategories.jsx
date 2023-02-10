import React from 'react'
import Banner from '../../component/banner/Banner'
import Header from '../../component/header/header'
import PriTitle from '../../component/innerSection/PriTitle'
import PopularProduct from '../../component/popularProduct/PopularProduct'
import { AboutBanner, ProductCategories1 } from '../../utils/images'
import Footer from '../footer/footer'
import "./productCategories.scss"

const ProductCategories = () => {
  return (
    <>
  <div className="container">
  <Banner  img ={AboutBanner} title={"ABOUT Green Delta Assist"}text={"Exceeding Expectations, Offering Much More Than Medicines"} />
  <div className="inner-container">
  <PriTitle 
  title={"OUR PHILOSOPHY"}
  details ={"We live by this promise that sums up what we do & why we exist. This is our guiding philosophy in our interactions with patients, doctors, employees & society at large."}/>
  <PopularProduct/>
  </div>
  </div>
    </>
  )
}

export default ProductCategories