import React from 'react'
import { Button } from '../button/button'
import "./storeFilter.scss"


const StoreFilter = () => {
  return (
    <>
     <div className="store inner-container">
          <h4>Store Locator</h4>
          <div className="store_location">
            <div className="store_location_city">
              <select className="city">
                <option value="city">city</option>
                <option value="city">city</option>
                <option value="city">city</option>
                <option value="city">city</option>
              </select>
            </div>
            <div className="store_location_area">
              <select className="area">
                <option value="area">city</option>
                <option value="area">city</option>
                <option value="area">city</option>
                <option value="area">city</option>
              </select>
            </div>
            <div className="store_location_time">
              <div>
                <input type={"checkbox"} />
                <label> 24 Hours </label>
              </div>
              <div>
                <input type={"checkbox"} />
                <label> Home Delivery </label>
              </div>
            </div>
            <div className="store_location_button">
              <Button text={"SEARCH"} />
            </div>
          </div>
        </div>
    </>
  )
}

export default StoreFilter