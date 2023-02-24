import React from "react";
import { ReactSVG } from "react-svg";
import { PopularImg1, ProductCategories2 } from "../../utils/images";
import SimpleSlider from "../slider/SliderComponent";
import "./popularProduct.scss";
import ProductList from "../../gql/query_product_list.graphql";
import { useQuery } from "@apollo/client";

function PopularProduct() {
  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(ProductList);

  const [productlist, setProductlist] = React.useState([]);

  React.useEffect(() => {
    console.log(data1);

    if (data1?.products?.items) {
      setProductlist(data1?.products?.items);
    }
  }, [data1]);

  return (
    <>
      <div className="popularProduct">
        <div className="popularProduct_banner">
          <img src={ProductCategories2} alt="" />
          <div className="popularProduct_banner_text">
            <ReactSVG src="" />
            <h6>Beauty</h6>
            <p>
              Beauty is beyond skin-deep & our naturally formulated range of
              beauty-care products can help you uncover that hidden, yet
              beautiful glow you so desire!
            </p>
          </div>
        </div>

        <div className="popularProduct_list">
          <SimpleSlider rows={2}>
            {productlist.map((value) => {
              return (
                <div className="popularProduct_list_card">
                  <div className="popularProduct_list_card_img">
                    <img src={value.thumbnail.url} alt="" />
                  </div>
                  <p>{value.name}</p>
                  <div className="popularProduct_list_card_button">
                    <button>Click here to Buy</button>
                  </div>
                </div>
              );
            })}
          </SimpleSlider>
        </div>
      </div>

      {/* <div className='popularProduct'>
        <div className='popularProduct_banner'>
            <img src={ProductCategories2} alt="" />
            <div className='popularProduct_banner_text'>
                <ReactSVG src=''/>
                <h6>Beauty</h6>
                <p>Beauty is beyond skin-deep & our naturally formulated range of beauty-care products can help you uncover that hidden, yet beautiful glow you so desire!</p>
            </div>

        </div>
        <div className='popularProduct_list'>
            <SimpleSlider rows={2}>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL1</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL2</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL3</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL4</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL5</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL6</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL7</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>
                <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL8</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>  <div className='popularProduct_list_card'>
                    <div className='popularProduct_list_card_img'>
                        <img src={PopularImg1} alt="" />
                    </div>
                    <p >Tea Tree Therapy Shampoo 473 mL9</p>
                    <div className='popularProduct_list_card_button'>
                        <button>Click here to Buy</button>                              
                    </div>
                </div>

            </SimpleSlider>
        </div>

    </div> */}
    </>
  );
}

export default PopularProduct;
