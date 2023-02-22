import React from 'react'
import { ReactSVG  } from 'react-svg'
import { Button } from '../../component/button/button'
import StoreFilter from '../../component/storeFilter/StoreFilter'
import Store_Locator from '../../gql/query_store_locator.graphql'
import { 
  Time,Locationgreen,Shipping,Watch,Callgreen } from '../../utils/images'
import "./storeLocator.scss"
import { useQuery } from '@apollo/client';

function StoreLocator()  {

  const { loading, error, data } = useQuery(Store_Locator);

  const [aboutVideo, setAboutVideo]= React.useState('');
  
  React.useEffect(()=>{
    console.log(data)

    if(data?.getStoreRecords[0]){
    setAboutVideo(data?.getStoreRecords[0])
    }
  
  },[data])

  return (
    <div>
       <div className="container">
        <StoreFilter/>
      
      <div className='location'>

       <div className='location_List'>
        <div className='location_List_header'>

       
        
          <h2>{aboutVideo?.store_name}</h2>
          <ReactSVG className='svg_part' src={Time}/>
        </div>
        <div className='location_List_add'>
          <div className='location_List_add_inner'><ReactSVG className='svg_part' src={Shipping}/> <p>{aboutVideo?.store_street_address_line_1 + ', ' +aboutVideo?.store_area + ', ' +aboutVideo?.store_address_line_2}</p></div>
          <ReactSVG className='svg_part' src={Watch}/>
        </div>
        <div className='location_List_time'><ReactSVG className='svg_part' src={Locationgreen}/><p>{aboutVideo?.store_active_time}</p></div>
        <div className='location_List_btn'>
          <div className='location_List_btn_inner'><ReactSVG className='svg_part' src={Callgreen}/><p>{aboutVideo?.store_contact_number}</p></div>
          <div><Button text={"VIEW ON MAP"} /></div>
        </div>

       </div>

      </div>

       </div>
      
    </div>
  )
}

export default StoreLocator
