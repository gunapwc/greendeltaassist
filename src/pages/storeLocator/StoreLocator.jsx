import React from 'react'
import Header from '../../component/header/header'
import Network from '../../component/network/Network'
import Outlets from '../../component/outlets/Outlets'
import Footer from '../footer/footer'


const StoreLocator = () => {
  return (
    <div>
       <div className="container">
       <Network/>
       </div>
        <Outlets/>
      
    </div>
  )
}

export default StoreLocator
