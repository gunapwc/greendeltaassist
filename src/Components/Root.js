import logo from '../logo.svg';
import './Root.scss';
import img2 from "./header img1.svg";
import img1 from "./header img2.svg";
import img3 from "./header-whatsapp.svg";
import img4 from "./header-call.svg";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Root() {
    return (
        <div className="App">
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
                    <li>
                        <a className="link">About Us</a>
                    </li>
                    <li>
                        <a className="link">Product Categories</a>
                    </li>
                    <li>
                        <a className="link">Partner</a>
                    </li>
                    <li>
                        <a className="link">Store Locator</a>
                    </li>
                    <li>
                        <a className="link">Careers</a>
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
                <div className="container" onClick={() => { }}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </header>
        </div>
    );
}

export default Root;
