import React from 'react'
import { ReactSVG } from 'react-svg'
import Header from '../../component/header/header'
import Network from '../../component/network/Network'
import Outlets from '../../component/outlets/Outlets'
import { 
  Time,Setting,Locationgreen,Shipping,Watch,Callgreen } from '../../utils/images'
import Footer from '../footer/footer'
import "./storeLocator.scss"



const StoreLocator = () => {
  return (
    <div>
       <div className="container">
      <div className='location'>
      <div className='location_List'>
        <div className='location_List_header'>
          <h2>Aster Pharmacy 122</h2>
          <ReactSVG src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG src={Shipping}/> <p>Shop no. 2, Aster Building, Abu Shagara, Sharjah</p></div>
          <ReactSVG src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG src={Locationgreen}/><p>All Days : 9:00 AM - 12:00 AM Friday: 9:00 AM - 12:00 PM / 2:00 PM - 11:00 PM</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG src={Callgreen}/><p>+97165570996</p></div>
          <div><button>VIEW ON MAP</button></div>
        </div>

       </div>
      </div>
       </div>
      
    </div>
  )
}

export default StoreLocator
