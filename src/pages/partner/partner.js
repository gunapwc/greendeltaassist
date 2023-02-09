import './partner.scss';
import img1 from "./partner.jpg.pagespeed.ic.PaL5pYEgPq.webp"
import home from "./home-svgrepo-com.svg"
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Partner() {
    return (
        <div className="partner">
            {/* <Header /> */}
            {/* <div className="header-align"></div>add this with header */}
            <div className="bannerp">
                <div className="banner-text">
                    <h3>
                        Partner With Us <br />
                    </h3>
                    <h2>
                        Quality Health Care<br /> Within Reach
                    </h2>
                </div>
                <div className="banner-img">
                    <img src={img1}></img>
                </div>
            </div>
            <div className="content-div" style={{ margin: "0% 15% 0% 15%" }}>

                <br />
                <br />

                <img src={home} width={15} ></img>
                <label>
                / PARTNER
                </label>

                <br />
                <br />
                <h1>Own A Franchise </h1>
                <br />
                Green Delta Assist has dotted the GCC healthcare landscape with over 200 pharmacies thereby touching upon the lives of millions by going beyond boundaries, both in terms of products & services. Now is your opportunity to be part of our expansion journey.

                <br />
                <br />
                <div className='button-div'>
                    <button className='button'>Register Interest</button>
                </div>
                <br />
                <br />
                <h1>Leading Pharmacy Chain In The GCC</h1>
                <br />
                <br />
                We strive for excellence in the healthcare sphere by offering our patrons premium products that care for their overall health & well-being. Green Delta Assist aims to exceed customer expectations by bringing together all stakeholders involved on a singular platform & ensure that trusted healthcare is within reach. We deeply value the relationship we share with our partners & we are always on the lookout for the best products & solutions that add value to the quality of healthcare available to our customers. If you think that you or your organization can provide great value that can contribute towards our goals of good health & happiness, please register below & get in touch with our buyers.
                <br />
                All registered suppliers will receive a registration number via an email from Green Delta Assist. Only those suppliers registered with Green Delta Assist can register products online.
                <br />
                <br />
                <div className='button-div'>
                    <button className='button'>SUPPLIER REGISTRATION</button>
                    <button className='button'>EXISTING SUPPLIER</button>
                </div>
            </div>
        </div>
    );
}

export default Partner;
