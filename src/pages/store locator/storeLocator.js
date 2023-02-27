import './storeLocator.scss';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from "./address.json"
import home from "./home-svgrepo-com.svg"
import {

    search,
    setting,

} from "../../utils/images";



function StoreLocator() {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const names = [
        'Kolkata',
        'Chennai',
        'Gurgaon',
        'Mumbai'
    ];
    const parseHTML = (html) => {
        let t = document.createElement('div');
        t.innerHTML = html;
        return t;
    }
    const [area, setArea] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setArea(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(area);
    };


    return (
        <>
            <div className='store-locator'>
                <br />
                <br />
                <div className="navigation">
                    <img src={home} width={15} ></img>
                    <label>
                        / PARTNER
                    </label>
                </div>
                <br />
                <br />
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Area</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={area}
                        onChange={handleChange}
                        input={<OutlinedInput label="Area" />}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <ul>
                    {data.map((value,i) => {
                        if (area.length > 0) {
                            return area.map((e) => {
                                if (e === value.city) {
                                    return (
                                        <li key={i} >
                                           <div dangerouslySetInnerHTML={{__html:value.address}}>
                                    </div>
                                        </li>
                                    )
                                }
                            })
                        }
                        else {
                            return (
                                <li>
                                    <div dangerouslySetInnerHTML={{__html:value.address}}>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
                <div className="content-div container">


                    <br />
                    <br />
                    <h5>OUR NETWORK</h5>
                    <h1>Leading Pharmacy Chain In The GCC</h1>
                    <br />
                    Aster Pharmacy, a division of Aster DM Healthcare is backed by more than two decades of experience in pharmaceutical retailing. Recognised today as the region’s leading pharmacy retail chain, Aster Pharmacy focuses on “delivering good health & happiness” through friendly neighbourhood pharmacies that are customer-centric & easily accessible.

                    <br />
                    <br />
                    {/* <div className='button-div'>
                        <button className='button'>Register Interest</button>
                    </div> */}
                    <div className="">
                        <div className="network-box">
                            <div className="tile">
                                <div className="">
                                    <div className="">
                                        <h1 className="">0</h1>
                                        <p>Retail Outlets</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="">
                                    <div className="">
                                        <h1 className="">0</h1>
                                        <p>Countries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="">
                                    <div className="">
                                        <h1 className="">0</h1>
                                        <p>Million<br /> Customers/Year</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="">
                                    <div className="">
                                        <h1 className="">0</h1>
                                        <p>Pharmacists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <h5>OUR RETAIL OUTLETS</h5>
                    <h1>Professional Service & Personal Care In A Pleasant Ambience</h1>
                    <br />
                    <br />
                    With a growing network of over 200 pharmacies, we are committed to bring reliable & quality healthcare closer to our consumers with an Aster pharmacy in every neighbourhood & the services of a knowledgeable Aster pharmacist available 24/7 for every household.
                    <br />
                    <br />
                    <div className='button-div'>
                        <button className='button'>SUPPLIER REGISTRATION</button>
                        <button className='button'>EXISTING SUPPLIER</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default StoreLocator;
