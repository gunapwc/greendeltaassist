import React, { useState } from "react";
import "./registerIntrestPage.scss";
import home from "./home-svgrepo-com.svg"
import { Button } from "../../component/button/button";
import InputBox from "../../component/inputbox/input";
import { useQuery, useMutation, gql } from '@apollo/client';
import mutationProduct from "../../gql/mutation_productregistartion";
import QueryCall from "./customquerycall";

const ProductRegistration = () => {
    const [formData, setFormData] = useState({
        "strength": "",
        "product_name": "",
        "pharmacy_price": "",
        "packing": "",
        "public_price": "",
        "content": "",
        "manufacturer": "",
        "category": "",
        "category_id": "",
        "origin_country": ""
    })

    const [submitProductForm, { loading, error, data }] = useMutation(mutationProduct, { fetchPolicy: "no-cache", onCompleted: (response) => { console.log(response) }, onError: (error) => { console.log(error) } });


    const handleClick = (e) => {
        e.preventDefault();
        // const { loading, error, data } = useQuery(queryFranchise(formData));
        // const { loading , error ,data} = QueryCall(formData);
        submitProductForm({ variable: formData })

        console.log(data);
        if (error)
            alert(error);
        else
            alert(data.productRegistration.success_message);

    }

    const handleChange = (e) => {
        let data = formData;
        data[e.target.name] = e.target.value;
        setFormData(data)
    }

    return (
        <div className="container register">
            <form onSubmit={(e) => { handleClick(e) }} de>
                <br />
                <br />

                <img src={home} width={15} ></img>
                <label>
                    / Register Product
                </label>

                <br />
                <br />
                <h1>General Information </h1>
                <br />
                <div className="row smallrow" >
                    <div className="col">
                        <InputBox placeholder="Name" type="text" name="name"  ></InputBox>
                    </div>
                    <div className="col">
                        <InputBox placeholder="Contact Number" type="number" name="Cnumber"></InputBox>
                    </div>
                </div>
                <div className="row smallrow" >
                    <div className="col">
                        <InputBox placeholder="Address" type="text" name="address" ></InputBox>
                    </div>
                </div>

                <p>
                    Product registration fee will be applicable based on the product/range. Reg fee varies from category to category.
                    Pharmacy accepts/rejects the application
                </p>
                <br />
                <br />
                <div className="row">
                    <div className="col1">
                        <h1>Product Details </h1>
                    </div>
                    <div className="col">
                        <h1>Price Details</h1>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col">
                        <InputBox placeholder="Product Name" type="text" name="product_name" value={formData.product_name} onChange={(e) => { handleChange(e); }} ></InputBox>
                    </div>
                    <div className="col">
                        <InputBox placeholder="Strength" type="text" name="strength" value={formData.strength} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                    <div className="col">
                        <InputBox placeholder="Price to Pharmacy" type="text" name="pharmacy_price" value={formData.pharmacy_price} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                </div>
                <div className="row" >
                    <div className="col1">
                        <InputBox placeholder="Packing" type="text" name="packing" value={formData.packing} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                    <div className="col">
                        <InputBox placeholder="Price to Public" type="text" name="public_price" value={formData.public_price} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                </div>
                <div className="row smallrow" >
                    <div className="col">
                        <InputBox placeholder="Content" type="text" name="content" value={formData.content} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                </div>
                <div className="row smallrow" >
                    <div className="col">
                        <InputBox placeholder="Manufacturer" type="text" name="manufacturer" value={formData.manufacturer} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                    <div className="col">
                        <InputBox placeholder="Origin Country" type="text" name="origin_country" value={formData.origin_country} onChange={(e) => { handleChange(e); }}></InputBox>
                    </div>
                </div>
                <div className="aligncenter">
                    <input type="submit" value="Register Now"></input>
                </div>

            </form>
        </div>
    )
}

export default ProductRegistration