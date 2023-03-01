import React from "react";
import Banner from "../../component/banner/Banner";
import Header from "../../component/header/header";
import PriTitle from "../../component/innerSection/PriTitle";
import PopularProduct from "../../component/popularProduct/PopularProduct";
import { AboutBanner, ProductCategories1 } from "../../utils/images";
import Footer from "../footer/footer";
import "./productCategories.scss";
import Category_List from "../../gql/query_category_list.graphql";
import { useQuery } from "@apollo/client";

const ProductCategories = () => {
  const { data: categorylist } = useQuery(Category_List);

  return (
    <>
      <div className="container">
        <Banner
          img={AboutBanner}
          title={"ABOUT Green Delta Assist"}
          text={"Exceeding Expectations, Offering Much More Than Medicines"}
        />
        <div className="inner-container">
          <PriTitle
            title={"OUR PHILOSOPHY"}
            details={
              "We live by this promise that sums up what we do & why we exist. This is our guiding philosophy in our interactions with patients, doctors, employees & society at large."
            }
          />
          {categorylist?.categoryList[0]?.children?.map((category, i) => {
            return (
              <PopularProduct
                key={i}
                category={category}
                category_id={category.category_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
