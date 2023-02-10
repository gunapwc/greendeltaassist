import React, { useEffect } from 'react'
import "./Blog.scss"
import Banner from '../../component/banner/Banner'
import PriTitle from '../../component/innerSection/PriTitle'
import {BlogImage} from "../../utils/images";

const Blog = () => {

  return (
    <div className='container'>

  <Banner img ={BlogImage} title={"Blog Inner Green Delta Assist"}text={"Blog Title Exceeding Expectations, Offering Much More Than Medicines"} />

  <PriTitle details={"Offering the entire gamut of curative, nutritive, baby products, lifestyle, wellness products, FMCG products, cosmetics, personal & homecare products - Green Delta Assist has become a household name in the India& has emerged as the brand of choice amongst pharmacies due to its solid availability & customer first orientation."}/>
  <PriTitle details={"Green Delta Assist has dotted the GCC healthcare landscape with over 200 pharmacies thereby touching upon the lives of millions by going beyond boundaries, both in terms of products & services."}/>
  <PriTitle details={`Driven by a zeal to innovate &amp; excel, Green Delta Assist has lead various first of its kind unique initiatives in the region – to name a few, the Secure Rewards Program, the first Pharmacy Rewards Program, launch of India’s 1st online pharmacy ${"www.asteronline.com"}, 800-700-600 - a dedicated call center enabling its customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7.`}/>
  <PriTitle details={"Offering the entire gamut of curative, nutritive, baby products, lifestyle, wellness products, FMCG products, cosmetics, personal & homecare products - Green Delta Assist has become a household name in the India& has emerged as the brand of choice amongst pharmacies due to its solid availability & customer first orientation."}/>
  <PriTitle details={"Green Delta Assist has dotted the GCC healthcare landscape with over 200 pharmacies thereby touching upon the lives of millions by going beyond boundaries, both in terms of products & services."}/>
  <PriTitle details={`Driven by a zeal to innovate &amp; excel, Green Delta Assist has lead various first of its kind unique initiatives in the region – to name a few, the Secure Rewards Program, the first Pharmacy Rewards Program, launch of India’s 1st online pharmacy ${"www.asteronline.com"}, 800-700-600 - a dedicated call center enabling its customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7.`}/>
  <PriTitle details={"Offering the entire gamut of curative, nutritive, baby products, lifestyle, wellness products, FMCG products, cosmetics, personal & homecare products - Green Delta Assist has become a household name in the India& has emerged as the brand of choice amongst pharmacies due to its solid availability & customer first orientation."}/>
  <PriTitle details={"Green Delta Assist has dotted the GCC healthcare landscape with over 200 pharmacies thereby touching upon the lives of millions by going beyond boundaries, both in terms of products & services."}/>
  <PriTitle details={`Driven by a zeal to innovate &amp; excel, Green Delta Assist has lead various first of its kind unique initiatives in the region – to name a few, the Secure Rewards Program, the first Pharmacy Rewards Program, launch of India’s 1st online pharmacy ${"www.asteronline.com"}, 800-700-600 - a dedicated call center enabling its customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7.`}/>

    </div>
  )
}

export default Blog