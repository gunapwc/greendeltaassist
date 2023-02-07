import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import {
  Logo,
  Secure,
  Online,
  Call,
  Whatsapp,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "../../utils/images";

function Header() {

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
        link: "product-catogories",
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
        link: "product-catogories",
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
        link: "product-catogories",
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
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul className="navList">
            <div>
              <button>Shop online</button>
            </div>

            {menuList[0].map((e) => (
              <Link to={e.link}>
                <li>{e.listItem}</li>
              </Link>
            ))}
          </ul>
          <div className="profilePart">
            <div className="secImg">
              <img src={Secure} alt="Secure" />
            </div>
            <div className="contNum">
              <p>FOR HOME DELIVERY</p>
              <p>
                {" "}
                <img src={Whatsapp} alt="Whatsapp" />{" "}
                <img src={Call} alt="Call" /> 7358308557
              </p>
            </div>
            <div
              className="hamberger"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      {menuToggle ? (
        <div className="magaMenu">
          <ul>
            {menuList[1].map((e) => (
              <Link to={e.link}>
                <li>{e.listItem}</li>
              </Link>
            ))}
          </ul>
          <ul>
            {menuList[2].map((e) => (
              <Link to={e.link}>
                <li>{e.listItem}</li>
              </Link>
            ))}
          </ul>
          <div className="magaMenu_inside">
            <div className="magaMenu_inside_card_head">
              <div className="magaMenu_inside_card_head_sec">
                <div>
                  <img src={Online} alt="Online" />
                </div>
                <p>Healthcare Essentials Delivered to Your Home </p>
              </div>
              <div className="magaMenu_inside_card_head_sec">
                <div>
                  <img src={Secure} alt="Secure" />
                </div>
                <p>
                  Presenting UAE’s First Digital Loyalty Program in Retail
                  Pharmacies{" "}
                </p>
              </div>
            </div>
            <div className="magaMenu_inside_icon">
              <p>Stay Connected</p>
              <div>
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
