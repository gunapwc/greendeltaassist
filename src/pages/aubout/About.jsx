import React from 'react'
import Banner from '../../component/banner/Banner'
import Header from '../../component/header/header'
import OurServices from '../../component/ourservices/OurServices'
import Outlets from '../../component/outlets/Outlets'
import Footer from '../footer/footer'
import {AboutBanner,Emg24} from "../../utils/images";
import PriTitle from '../../component/innerSection/PriTitle'
import { ReactSVG } from "react-svg";
import OurValues from '../../component/0urValues/OurValues'
import "./about.scss"
import ChairmanMsg from '../../component/ChairmanMsg/ChairmanMsg'
import GlobalNetwork from '../../component/globalNetwork/GlobalNetwork'



export const About = () => {



  return (
    <>
<div className='container'>
  <Banner img ={AboutBanner} title={"ABOUT ASTER PHARMACY"}text={"Exceeding Expectations, Offering Much More Than Medicines"} />
  <PriTitle details={"Offering the entire gamut of curative, nutritive, baby products, lifestyle, wellness products, FMCG products, cosmetics, personal & homecare products - Aster Pharmacy has become a household name in the UAE & has emerged as the brand of choice amongst pharmacies due to its solid availability & customer first orientation."}/>
  <PriTitle details={"Aster Pharmacy has dotted the GCC healthcare landscape with over 200 pharmacies thereby touching upon the lives of millions by going beyond boundaries, both in terms of products & services."}/>
  <PriTitle details={`Driven by a zeal to innovate &amp; excel, Aster Pharmacy has lead various first of its kind unique initiatives in the region – to name a few, the Secure Rewards Program, the first Pharmacy Rewards Program, launch of UAE’s 1st online pharmacy ${"www.asteronline.com"}, 800-700-600 - a dedicated call center enabling its customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7.`}/>

  <div className='emg'>
    <div className='emg_img'>
      <img src={Emg24} alt="" />
    </div>
    <p className='emg_text'>With every new innovation, Aster Pharmacy works incessantly to bring itself closer to its consumers so as to fulfill its mission of having Aster Pharmacy in every neighbourhood & a knowledgeable Aster pharmacist available 24/7 for every household!</p>
  </div>

  <PriTitle 
  title={"OUR PHILOSOPHY"}
  subTitle ={"We’ll Treat You Well"} 
  details ={"We live by this promise that sums up what we do & why we exist. This is our guiding philosophy in our interactions with patients, doctors, employees & society at large."}/>
  
  <PriTitle  
  subTitle={"Our Values"} 
  details={"We, at Aster DM Healthcare, abide by a core set of values that guide our organisational behaviour & decision making & that create the unique ethos that is imbibed in every Asterian."}/>
   <OurValues/>
  </div>

   <ChairmanMsg />
   <GlobalNetwork/>
 <Outlets/>
 








    </>
  )
}
