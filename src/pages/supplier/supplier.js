import './supplier.scss';

import { useQuery, gql } from '@apollo/client';
import queryPartner from '../../gql/query_partner';
import { useEffect, useState } from 'react';
import PriTitle from '../../component/innerSection/PriTitle';


function Supplier() {
    const {  data } = useQuery(queryPartner);
   
    return (
       
       
        <div className="partner">
           


    
           
            
            <div className='container'>
            <PriTitle 
    title={"OUR PHILOSOPHY"}
    subTitle ={"Supplier Registration "} 
    details ={"Kindly fill the form below to share your information with our buyers."}/>
    <PriTitle 
    details ={"General Information"}/>
    <div className='form_group'>
        <div className='exand_width'>
        <input  type={"text"}placeholder="Business" name=''/>
        <input type={"text"}placeholder="Address*" name=''/>
        </div>
     <div className='defalt_width'>
     <select>
            <option value={"text"}>text</option>
        </select>
        <input type={"text"}placeholder="Email*" name=''/>
     </div>
     <div className='defalt_width'>
     <input type={"text"}placeholder ="Contact Number*"name=''/>
        <input type={"text"}placeholder ="Website*"name=''/>
     </div>
    </div>
    <PriTitle 
    details ={"General Information"}/>
    <div className='form_group'>
        <div className='exand_width'>
        <input  type={"text"}placeholder="Year Of Establishment" name=''/>
        <input type={"text"}placeholder="Operation in other Country(if yes,please specify)" name=''/>
        <input type={"text"}placeholder="Nature of Business" name=''/>
        </div>
     <div className='exand_width'>
     <input type={"file"}placeholder ="Contact Number*"name=''/>
        <input type={"file"}placeholder ="Website*"name=''/>
     </div>
    </div>

            </div>
            
                <div className='button-div'>
                    <button className='button'>SUPPLIER REGISTRATION</button>
                    <div style={{width:"40px"}}></div>
                    <button className='button'>EXISTING SUPPLIER</button>
                </div>
        </div>
    );
}

export default Supplier;
