import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  FooterNewsTwo,
  FooterNewsOne,
  Location,
  Mail,
  Phone,
  SendIcon,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  AsterPath,
  AsterNli,
} from "../../utils/images";

function Footer() {

  const menuList = [
    [
      {
        id: 1,
        listItem: "About Us",
        link: "about-us",
      },
      {
        id: 2,
        listItem: "Product Categories",
        link: "product-categories",
      },
      {
        id: 3,
        listItem: "Partner",
        link: "partner",
      },
      {
        id: 4,
        listItem: "Store Locator",
        link: "store-locator",
      },
      {
        id: 5,
        listItem: "Careers",
        link: "careers",
      },
    ],
    [
      {
        id: 1,
        listItem: "About Us",
        link: "about-us",
      },
      {
        id: 2,
        listItem: "Product Categories",
        link: "product-categories",
      },
      {
        id: 3,
        listItem: "Partner",
        link: "partner",
      },
      {
        id: 4,
        listItem: "Store Locator",
        link: "store-locator",
      },
      {
        id: 5,
        listItem: "Careers",
        link: "careers",
      },
    ],
    [
      {
        id: 1,
        listItem: "About Us",
        link: "about-us",
      },
      {
        id: 2,
        listItem: "Product Categories",
        link: "product-categories",
      },
      {
        id: 3,
        listItem: "Partner",
        link: "partner",
      },
      {
        id: 4,
        listItem: "Store Locator",
        link: "store-locator",
      },
      {
        id: 5,
        listItem: "Careers",
        link: "careers",
      },
    ],
  ];
  return (
    <>
      <footer>
        <div className="container">
          <div className="info">
            <div className="info_location">
              <div className="info_location_icon">
                <img src={Location} alt="Location" />
              </div>
              <div className="info_location_text">
                <p>Green Delta Assist </p>
                <p>
                  3rd Floor, A Block, Al Hudaiba Awards Building, Jumeirah Road,
                  Dubai, India
                </p>
              </div>
            </div>
            <div className="info_location">
              <div className="info_location_icon">
                <img src={Phone} alt="Phone" />
              </div>
              <div className="info_location_text">
                <p>800700600</p>
              </div>
            </div>
            <div className="info_location">
              <div className="info_location_icon">
                <img src={Mail} alt="Mail" />
              </div>
              <div className="info_location_text">
                <p>info@asterpharmacy.com </p>
              </div>
            </div>
          </div>
          <div className="main_section">
            <ul className="main_section_main">
              <li>
                <ul>
                  {menuList[1].map((e,i) => (
                    <Link key={i} to={e.listItem}>
                      <li>{e.listItem}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li>
                <ul>
                  {menuList[2].map((e,i) => (
                    <Link  key={i} to={e.link}>
                      <li>{e.listItem}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="">Latest News</Link>
                <div className="main_section_main_news">
                  <div className="main_section_main_news_img">
                    <img src={FooterNewsOne} alt="FooterNewsOne" />
                  </div>
                  <div className="main_section_main_news_date">
                    <p>3 APR 2019</p>
                    <p>
                      Green Delta Assist wins the Dubai <br />
                      Service Excellence Awards under the
                      <br />
                      Health &amp; Wellness Sector.
                    </p>
                  </div>
                </div>
                <div className="main_section_main_news">
                  <div className="main_section_main_news_img">
                    <img src={FooterNewsTwo} alt="FooterNewsTwo" />
                  </div>
                  <div className="main_section_main_news_date">
                    <p>3 APR 2019</p>
                    <p>
                      Green Delta Assist wins the Dubai <br />
                      Service Excellence Awards under the
                      <br />
                      Health &amp; Wellness Sector.
                    </p>
                  </div>
                </div>
              </li>
              <li className="sigi_section">
                <label>Sign up for our Newsletter</label>
                <div className="sigi_section_input">
                  <input type="text" placeholder="Enter your Email here" />
                  <span>
                    <img src={SendIcon} alt="SendIcon" />
                  </span>
                </div>
                <div className="sigi_section_icon">
                  <h5>Stay Connected</h5>
                  <div className="sigi_section_icons">
                    <span>
                      <img src={Linkedin} alt="Linkedin" />
                    </span>
                    <span>
                      <img src={Instagram} alt="Instagram" />
                    </span>
                    <span>
                      <img src={Facebook} alt="Facebook" />
                    </span>
                    <span>
                      <img src={Twitter} alt="Twitter" />
                    </span>
                    <span>
                      <img src={Youtube} alt="Youtube" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="main_section_sub_footer">
              <div>
                {/* <img src={AsterPath} alt="AsterNli" /> */}
              </div>

              <div></div>
              <div>
                {/* <img src={AsterNli} alt="AsterNli" /> */}
              </div>
              <div>
                <p>
                  MOH License Number - Y91IAI04-120722 © 2023 Green Delta Assist.
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
