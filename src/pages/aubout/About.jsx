import React from 'react'
import Banner from '../../component/banner/Banner'
// import Header from '../../component/header/header'
import OurServices from '../ourservices/OurServices'
import Outlets from '../../component/outlets/Outlets'
import Footer from '../footer/footer'
import {AboutBanner} from "../../utils/images";


export const About = () => {
  return (
    <>
{/* <Header  /> */}
<div className='container'>
  <Banner img ={AboutBanner} title={"ABOUT ASTER PHARMACY"}text={"Exceeding Expectations, Offering Much More Than Medicines"} />
  {/* <OurServices/> */}
  </div>
{/* <Outlets/> */}
{/* <Footer/> */}

    </>
  )
}
