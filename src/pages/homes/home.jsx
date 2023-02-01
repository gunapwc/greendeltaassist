import React from "react";
import Button from "../../component/button/button";
import Header from "../../component/header/header";
import PriTitle from "../../component/innerSection/PriTitle";
import OurServices from "../../component/ourservices/OurServices";
import Outlets from "../../component/outlets/Outlets";
import {
  Video,
  CardOneImg,
  CardTwoImg,
  CardTwoImgApp,
  ProductCategories1,
  ProductCategories2,
  ProductCategories3,
  ProductCategories4,
  ProductCategoriesIcon1,ProductCategoriesIcon2,ProductCategoriesIcon3,ProductCategoriesIcon4,
} from "../../utils/images";
import Footer from "../footer/footer";
import "./home.scss";
function Home() {

  return (
    <>
      <Header />
      <div className=" container">
        <div className="banner ">
          <div className="banner_vedio">
            <video autoPlay>
              <source src={Video} type="video/mp4" />
            </video>
            <div class="banner_vedio_text">
              <h4>ABOUT US</h4>
              <h3>Spreading Good Health &amp; Happiness</h3>
            </div>
          </div>
          <div className="banner_card">
            <div className="banner_card_text">
              <h4>Own A Franchise</h4>
              <h3>
                Click here to become a part of UAE's leading Pharmacy chain
              </h3>
            </div>
            <div className="banner_card_img">
              <img src={CardOneImg} alt="CardOneImg" />
            </div>
          </div>
          <div className="banner_card">
            <div className="banner_card_img">
              <img src={CardTwoImg} alt="CardTwoImgApp" />
            </div>
            <div className="banner_card_img">
              <img src={CardTwoImgApp} alt="CardTwoImg" />
            </div>
          </div>
        </div>
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

        <div className="network">
          <PriTitle
            title={"OUR NETWORK"}
            subTitle={"Leading Pharmacy Chain in the GCC"}
            details={`Aster Pharmacy, a division of Aster DM Healthcare is backed by more
        than two decades of experience in pharmaceutical retailing. Recognised
        today as the region’s leading pharmacy retail chain, Aster Pharmacy
        focuses on “delivering good health & happiness” through friendly
        neighbourhood pharmacies that are customer-centric & easily
        accessible.`}
            detail={true}
          />

          <div className="network_list">
            <div className="network_list_section">
              <h1>238</h1>
              <h2>Retail Outlets</h2>
            </div>
            <div className="network_list_section">
              <h1>238</h1>
              <h2>Retail Outlets</h2>
            </div>
            <div className="network_list_section">
              <h1>238</h1>
              <h2>Retail Outlets</h2>
            </div>
            <div className="network_list_section">
              <h1>238</h1>
              <h2>Retail Outlets</h2>
            </div>
          </div>
          <div className="button_section">
            <Button text={"OWN A FRANCHISE"} />
          </div>
        </div>

        <div className="categories">
          <PriTitle
            title={"PRODUCT CATEGORIES"}
            subTitle={"The Best Care, Every Step Of The Way"}
            details={`Offering an entire gamut of curative, nutritive, baby care, lifestyle, wellness, fitness, beauty, personal care, homecare products & more coupled with caring & professional health advisory - Aster Pharmacy is a household name & a brand of choice in the UAE.`}
            detail={true}
          />
          <div className="categories_section">
            <div className="categories_section_card">
              <img src={ProductCategories1} alt="" />
              <div className="categories_section_card_icon">
                <img src={ProductCategoriesIcon1} alt="" />
                <h2>Lifestyle & Fitness</h2>
              </div>
            </div>
            <div className="categories_section_card">
              <img src={ProductCategories2} alt="" />
              <div className="categories_section_card_icon">
                <img src={ProductCategoriesIcon2} alt="" />
                <h2>Beauty</h2>
              </div>
            </div>
            <div className="categories_section_card">
              <img src={ProductCategories3} alt="" />
              <div className="categories_section_card_icon">
                <img src={ProductCategoriesIcon3} alt="" />
                <h2>Mother & Baby</h2>
              </div>
            </div>
            <div className="categories_section_card">
              <img src={ProductCategories4} alt="" />
              <div className="categories_section_card_icon">
                <img src={ProductCategoriesIcon4} alt="" />
                <h2>Nutrition</h2>
              </div>
            </div>
          </div>
          <div className="button_section">
            {" "}
            <Button text={" VIEW ALL CATEGORIES"} />
          </div>
        </div>
        <div className="library">
          <PriTitle
            title={"Health Library"}
            subTitle={"Offering Curated Healthcare Tips"}
          />
          <div className="button_section">
            {" "}
            <Button text={" VIEW ALL"} />
          </div>
        </div>

        <OurServices/>

        <div className="careBrands">
          <PriTitle
            title={"LEADING HEALTH CARE BRANDS"}
            subTitle={"Unique Portfolio Of Specialised brands"}
          />
          <div className="button_section">
            {" "}
            <Button text={"VIEW MORE BRANDS"} />
          </div>
        </div>


      </div>
      <Outlets/>
      <Footer />
    </>
  );
}

export default Home;
