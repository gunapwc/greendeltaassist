import './Root.scss';
import img2 from "./header img1.svg";
import img1 from "./header img2.svg";
import img3 from "./header-whatsapp.svg";
import img4 from "./header-call.svg";
import { Link } from 'react-router-dom';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Header() {
    const activeLink = (e) => {
        debugger;
        let ListItems = e.target.parentElement.parentElement.children;
        for (let i = 0; i < ListItems.length; i++) {
            if (ListItems[i].classList.contains("active")) {
                ListItems[i].classList.remove("active");
            }
        }
        e.target.parentElement.classList.add("active");
    };
    const menuList = [
        [
            {
                id: 1,
                listItem: "About Us",
            },
            {
                id: 2,
                listItem: "Product Categories",
            },
            {
                id: 3,
                listItem: "Partner",
            },
            {
                id: 4,
                listItem: "Store Locator",
            },
            {
                id: 5,
                listItem: "Careers",
            },
        ],
        [
            {
                id: 1,
                listItem: "About Us",
            },
            {
                id: 2,
                listItem: "Product Categories",
            },
            {
                id: 3,
                listItem: "Partner",
            },
            {
                id: 4,
                listItem: "Store Locator",
            },
            {
                id: 5,
                listItem: "Careers",
            },
        ],
        [
            {
                id: 1,
                listItem: "About Us",
            },
            {
                id: 2,
                listItem: "Product Categories",
            },
            {
                id: 3,
                listItem: "Partner",
            },
            {
                id: 4,
                listItem: "Store Locator",
            },
            {
                id: 5,
                listItem: "Careers",
            },
        ],
    ];
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <>
            <header className="App-header">
                <img src={img1}></img>
                <button className="button-header">
                    <a className="link">Shop Online</a>
                </button>
                {/* <Menu >
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Product Categories</MenuItem>
                    <MenuItem>Partner</MenuItem>
                    <MenuItem>Store Locator</MenuItem>
                    <MenuItem>Careers</MenuItem>
                </Menu> */}
                <ul className="list-header" >
                    <li className="listItem">
                        <Link className="link" onClick={(e) => { activeLink(e); }}>About Us</Link>
                    </li>
                    <li className="listItem">
                        <Link className="link" onClick={(e) => { activeLink(e); }}>Product Categories</Link>
                    </li>
                    <li className="listItem">
                        <Link className="link" to="../partner" onClick={(e) => { activeLink(e); }}>Partner</Link>
                    </li>
                    <li className="listItem">
                        <Link className="link" onClick={(e) => { activeLink(e); }}>Store Locator</Link>
                    </li>
                    <li className="listItem">
                        <Link className="link" onClick={(e) => { activeLink(e); }}>Careers</Link>
                    </li>
                </ul>
                <img src={img2}></img>
                <div className="header-div">
                    For home Delivery
                    <br />
                    <img src={img3}></img>
                    <img src={img4}></img>
                    800700600
                </div>
                <div className="container" onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </header>
            {menuToggle ? (
                <div className="magaMenu">
                    <ul>
                        {menuList[1].map((e) => (
                            <Link to={e.listItem}>
                                <li>{e.listItem}</li>
                            </Link>
                        ))}
                    </ul>
                    <ul>
                        {menuList[2].map((e) => (
                            <Link to={e.listItem}>
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