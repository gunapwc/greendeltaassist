import React from 'react'
import Button from '../button/button'
import PriTitle from '../innerSection/PriTitle'
import "./Outlets.scss"


const Outlets = () => {
  return (
    <>
            <div className="outlets">
          <PriTitle
            title={"OUR RETAIL OUTLETS"}
            subTitle={"Professional Service & Care In A Pleasant Ambience"}
            details={`With a growing network of over 200 pharmacies, we are committed to bring reliable & quality healthcare closer to our consumers with an Aster pharmacy in every neighbourhood & the services of a knowledgeable Aster pharmacist available 24/7 for every household. outtlets `}
            detail={true}
          />
          <div className="button_section">
            <Button text={" STORE LOCATOR"} />
          </div>
        </div>
    </>
  )
}

export default Outlets