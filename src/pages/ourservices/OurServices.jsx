import React from 'react'
import PriTitle from '../../component/innerSection/PriTitle'
import {

  OurServices1,
  OurServices2,
  OurServices3,
  OurServices4,
  OurServices5,
  OurServices6,
  OurServices7,
  OurServices8,
  OurServices9,
  OurServices10,
  OurServices11,
  OurServices12,
  OurServices13,
  OurServices14,
  OurServices15,
  OurServices16,
  Whatsapp,

} from "../../utils/images";
import "./OurServices.scss"
import Outlets from '../../component/outlets/Outlets';

const OurServices = () => {
  {/* <div className="services">
<PriTitle
title={"OUR SERVICES"}
subTitle={"Offering Expertise & Accessibility"}
details={`From pharmacies to healthcare e-commerce, loyalty programmes, home delivery services & more supporting a seamless health journey, making millions of lives better.`}
detail={true}
/>
<div className="services_header">
<div className="services_header_section">
  <div className="services_header_section_img">
    <img src={OurServices1} alt="OurServices1" />
  </div>
  <h6>Home Delivery</h6>
</div>
<div className="services_header_section">
  <div className="services_header_section_img">
    <img src={OurServices2} alt="OurServices1" />
  </div>
  <h6>Online Services</h6>
</div>
<div className="services_header_section">
  <div className="services_header_section_img">
    <img src={OurServices3} alt="OurServices1" />
  </div>
  <h6>Rewards Programmes</h6>
</div>
<div className="services_header_section">
  <div className="services_header_section_img">
    <img src={OurServices4} alt="OurServices1" />
  </div>
  <h6>Teleconsultation</h6>
</div>
</div>
</div> */}
  return (
    <>
      <div className="main-container">
        <div className="our-services">
          <div className="services-header">
            <div className="site-main-container d-flex align-items-center">
              <div className="about-aster">
                <h4>Pharmacy Retailing</h4>
                <h3>
                  Complete Circle Of Care - Offering Expertise &amp; Accessibility<br />
                </h3>
              </div>
              <div className="about-header-img">
                <img src={OurServices4} alt="madison" width="861" height="349" />
              </div>
            </div>
          </div>
          <div className="section-1 inner-container">
            <h3 className="service-title">Pharmacy Retailing</h3>
            <h5 className="ddisplay">
              Aster Pharmacy from Aster DM Healthcare is backed by more than two decades of experience in pharmaceutical retailing. Caring &amp; professional health advisory coupled with high standards of integrity &amp; quality offers the best customer experience at Aster Pharmacies.
            </h5>
            <h5 className="mdisplay">
              Caring &amp; professional health advisory coupled with high standards of integrity &amp; quality offers the best customer experience at Aster Pharmacies.
            </h5>
          </div>
          <div className="delivery-service inner-container" data-id="delivery-service">
            <h3 className="service-title">Home Delivery</h3>
            <p className="ddisplay">The Home delivery services bring healthcare to the convenience of your home. 800-700-600 - a dedicated call centre enables customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7 &amp; free home delivery.</p>
            <p className="mdisplay">The Home delivery services bring healthcare to the convenience of your home. 800-700-600 - a dedicated call centre enables customers to access over 700+ multilingual pharmacists who counsel &amp; provide medical assistance 24/7 &amp; free home delivery.</p>
            <div className="service-cards ">
              <div className="card-left">
                <img src={OurServices3} style={{width:"100%", height:"100%"}}/>
              </div>
              <div className="card-right">
                <div className="content">
                  <div className="top">
                    <img src={OurServices6}/>
                    <p>800 700 600</p>
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <img src={OurServices7} />
                      <p>Get Free Home Delivery</p>
                    </div>
                    <div className="row">
                      <img src={OurServices8}/>
                      <p>Chat With Our Pharmacist</p>
                    </div>
                    <div className="row">
                      <img src={OurServices9}/>
                      <p>Track Your Order</p>
                    </div>
                    <div className="row">
                      <img src={OurServices10} width="37" height="37" />
                      <p>Call us or WhatsApp us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-btn"><a style={{color: "#fff"}} href="tel:800700600">Call NOW</a></div>
          </div>
          <div className="aster-service inner-container" data-id="aster-service">
            <h3 className="service-title">Online Services</h3>
            <p className="ddisplay">Aster Online is an e-commerce healthcare platform from Aster DM Healthcare Group offering a product range from curative &amp; nutritive products, baby care, lifestyle, wellness &amp; rehabilitation to FMCG products, cosmetics, personal &amp; home care products &amp; medical devices &amp; equipment. By introducing Aster Online, Aster Pharmacy becomes the first pharmacy in the UAE to go online - one of the many firsts in the healthcare &amp; wellness space that Aster is known for over the years.</p>
            <p className="mdisplay">By introducing Aster Online, Aster Pharmacy becomes the first pharmacy in the UAE to go online - one of the many firsts in the healthcare &amp; wellness space that Aster is known for over the years.</p>
            <div className="service-cards">
              <div className="card-left">
                <img src={OurServices2} style={{width:"100%", height:"100%"}}/>
              </div>
              <div className="card-right">
                <div className="content">
                  <div className="top top2">
                    <img src={OurServices11} />
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <img src={OurServices12} />
                      <p>Online Chat With Pharmacist</p>
                    </div>
                    <div className="row">
                      <img src={OurServices13} />
                      <p>Online Payment/Cash On Delivery</p>
                    </div>
                    <div className="row">
                      <img src={OurServices14} />
                      <p>Delivery All Across The UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-btn"><a style={{color: "#fff"}} href="http://asteronline.com"> VISIT ASTER ONLINE</a></div>
          </div>
          <div className="loyalty-service inner-container" data-id="loyalty-service">
            <h3 className="service-title">Rewards Program</h3>
            <p className="ddisplay">The Aster Secure Rewards Programme is UAES&#039;s 1st pharmacy Rewards Programme. Apart from being able to earn points for all purchases at Aster Pharmacy &amp; Aster Online, customers can avail exclusive member-only offers at Aster Clinics, Aster Optics &amp; a multitude of partners across various industries. Earn Blue Tag discounts on wide-range of medical devices, wellness &amp; beauty products. Great savings &amp; amazing rewards is the way to go with Aster Secure!</p>
            <p className="mdisplay">The Aster Secure Loyalty Programme is UAES&#039;s 1st pharmacy rewards Programme. Great savings &amp; amazing rewards is the way to go with Aster Secure!</p>
            <div className="service-cards">
              <div className="card-left" >
              <img src={OurServices1} style={{width:"100%", height:"100%"}}/>
              </div>
              <div className="card-right">
                <div className="content">
                  <div className="top top2">
                    <img src={OurServices15} />
                  </div>
                  <div className="bottom">
                    <div className="row">
                      <p className="txt1">Stay Healthy, <span>Stay Rewarded</span></p>
                    </div>
                    <div className="row">
                      <p className="txt2">
                        Presenting UAE's First Digital Rewards Program<br />
                        In Healthcare Retail<br />
                      </p>
                    </div>
                    <div className="row">
                      <img src={OurServices16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-btn inner-container"><a style={{color: "#fff"}} href="http://asteronline.com">REGISTER NOW</a></div>

            <div className="aster-service inner-container tele-cos container" data-id="tele-cos">
              <h3 className="service-title">Teleconsultation</h3>
              <p className="ddisplay">From cardiologists & endocrinologists to obstetricians & paediatricians, Aster’s new teleconsultation service allows people to remotely consult qualified and specialist doctors across 30 specialties. Not only does the service offer consultations with doctors but also makes prescription refills, medicines & health products accessible to people through Aster Pharmacy’s home delivery option.</p>
              <p className="mdisplay">From cardiologists & endocrinologists to obstetricians & paediatricians, Aster’s new teleconsultation service allows people to remotely consult qualified and specialist doctors across 30 specialties.</p>
              <div className="service-cards">
                <div className="card-left">
                <img src={OurServices5} style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="card-right">
                  <div className="content1">
                    <div className="bottom">
                      <div className="row1">
                        <div className="psecd">
                          <h3 className="service-title">Teleconsultation</h3>
                          <p style={{visibility: "hidden"}}>Consult your doctor while you stay safe at home</p>
                        </div>
                        <p><span className="tel-span">Aster Teleconsultation Benefits:</span><br />
                          Avail medical follow ups, medicine prescription reﬁls, health advice & more via video consultation</p>
                        <ul>
                          <li>33 years of Trusted Legacy</li>
                          <li>Qualiﬁed Professional Doctors</li>
                          <li>Quick Response - 100% Secure, Safe & Privacy Guaranteed</li>
                          <li>Prescribed Medicine Delivered Home</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-btn inner-container"><a target="_blank" style={{color: "#fff"}} href="https://asterhelpdesk.com/tc/home.aspx ">BOOK NOW</a></div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default OurServices