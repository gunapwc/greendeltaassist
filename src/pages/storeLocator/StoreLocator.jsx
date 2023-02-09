import React from 'react'
import { ReactSVG  } from 'react-svg'
import { Button } from '../../component/button/button'
import StoreFilter from '../../component/storeFilter/StoreFilter'
import { 
  Time,Locationgreen,Shipping,Watch,Callgreen } from '../../utils/images'
import "./storeLocator.scss"




const StoreLocator = () => {
  return (
    <div>
       <div className="container">
        <StoreFilter/>
      <div className='location'>
      <div className='location_List'>
        <div className='location_List_header'>
          <h2>Green Delta Assist 122</h2>
          <ReactSVG className='svg_part' src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG className='svg_part' src={Shipping}/> <p>Shop no. 2, Green Delta Assist Building, Abu Shagara, Sharjah</p></div>
          <ReactSVG className='svg_part' src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG className='svg_part' src={Locationgreen}/><p>All Days : 9:00 AM - 12:00 AM Friday: 9:00 AM - 12:00 PM / 2:00 PM - 11:00 PM</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG className='svg_part' src={Callgreen}/><p>+97165570996</p></div>
          <div><Button text={"VIEW ON MAP"} /></div>
        </div>

       </div>
       <div className='location_List'>
        <div className='location_List_header'>
          <h2>Green Delta Assist 122</h2>
          <ReactSVG className='svg_part' src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG className='svg_part' src={Shipping}/> <p>Shop no. 2, Green Delta Assist Building, Abu Shagara, Sharjah</p></div>
          <ReactSVG className='svg_part' src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG className='svg_part' src={Locationgreen}/><p>All Days : 9:00 AM - 12:00 AM Friday: 9:00 AM - 12:00 PM / 2:00 PM - 11:00 PM</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG className='svg_part' src={Callgreen}/><p>+97165570996</p></div>
          <div><Button text={"VIEW ON MAP"} /></div>
        </div>

       </div>
       <div className='location_List'>
        <div className='location_List_header'>
          <h2>Green Delta Assist 122</h2>
          <ReactSVG className='svg_part' src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG className='svg_part' src={Shipping}/> <p>Shop no. 2, Green Delta Assist Building, Abu Shagara, Sharjah</p></div>
          <ReactSVG className='svg_part' src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG className='svg_part' src={Locationgreen}/><p>All Days : 9:00 AM - 12:00 AM Friday: 9:00 AM - 12:00 PM / 2:00 PM - 11:00 PM</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG className='svg_part' src={Callgreen}/><p>+97165570996</p></div>
          <div><Button text={"VIEW ON MAP"} /></div>
        </div>

       </div>
       <div className='location_List'>
        <div className='location_List_header'>
          <h2>Green Delta Assist 122</h2>
          <ReactSVG className='svg_part' src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG className='svg_part' src={Shipping}/> <p>Shop no. 2, Green Delta Assist Building, Abu Shagara, Sharjah</p></div>
          <ReactSVG className='svg_part' src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG className='svg_part' src={Locationgreen}/><p>All Days : 9:00 AM - 12:00 AM Friday: 9:00 AM - 12:00 PM / 2:00 PM - 11:00 PM</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG className='svg_part' src={Callgreen}/><p>+97165570996</p></div>
          <div><Button text={"VIEW ON MAP"} /></div>
        </div>

       </div>
      </div>
       </div>
      
    </div>
  )
}

export default StoreLocator
