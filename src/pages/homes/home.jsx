import React, { useEffect } from "react";
import {Button} from "../../component/button/button";
import PriTitle from "../../component/innerSection/PriTitle";
import Network from "../../component/network/Network";
import OurServices from "../../component/ourservices/OurServices";
import Outlets from "../../component/outlets/Outlets";
import SimpleSlider from "../../component/slider/SliderComponent";
import StoreFilter from "../../component/storeFilter/StoreFilter";
import {
  Video,
  CardOneImg,
  CardTwoImg,
  CardTwoImgApp,
  ProductCategories1,
  ProductCategories2,
  ProductCategories3,
  ProductCategories4,
  ProductCategoriesIcon1,ProductCategoriesIcon2,ProductCategoriesIcon3,ProductCategoriesIcon4, HealthcareTips1,
  HealthcareTips2,
  HealthcareTips3,
  HealthcareTips4,
  CareBrands1,CareBrands2,CareBrands3,CareBrands4,CareBrands5,CareBrands6,CareBrands7
} from "../../utils/images";
import "./home.scss";
import { useQuery } from '@apollo/client';
import ABOUT_US_VIDEO from "../../gql/query_about_us_video.graphql";
import TEST from "../../gql/query_test";
import { usePostAxios} from "../../utils/apiAxios"
import Brand_List from "../../gql/query_brand_list.graphql";
import DOMPurify from 'dompurify'; 



function Home() {

  const data2 = `lorem <b onmouseover="alert('mailicious message');">test</b>`;

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data1)
  })

  const { loading, error, data } = useQuery(ABOUT_US_VIDEO);
  const { loading:loading1, error:error1, data:data1 } = useQuery(Brand_List);

  //const about = usePostAxios(TEST,[]);
  const videoRef = React.useRef();

  const [aboutVideo, setAboutVideo]= React.useState('');

  const [brandlist, setbrandlist]= React.useState('');
  
  React.useEffect(()=>{
    console.log(data)

    if(data?.cmsBlocks?.items[0]){
    setAboutVideo(data?.cmsBlocks?.items[0])
    }
  
  },[data])

  React.useEffect(()=>{
    console.log(data1)

    if(data1?.cmsBlocks?.items[0]){
      setbrandlist(data1?.cmsBlocks?.items[0])
    }
  
  },[data1])

  useEffect(() => {    
    videoRef.current?.load();
  }, [aboutVideo]);
  
  return (
    <>
      <div className=" container">
        <div className="homeBanner ">
          <div className="homeBanner_vedio">
            <video autoPlay ref={videoRef}>
              <source src={aboutVideo.content} type="video/mp4" />
            </video>
            <div className="homeBanner_vedio_text">
              <h4>{aboutVideo?.title}</h4>
              <h3>Spreading Good Health &amp; Happiness</h3>
            </div>
          </div>
          <div className="homeBanner_card">
            <div className="homeBanner_card_text">
              <h4>Own A Franchise</h4>
              <h3>
                Click here to become a part of India's leading Pharmacy chain
              </h3>
            </div>
            <div className="homeBanner_card_img">
              <img src={CardOneImg} alt="CardOneImg" />
            </div>
          </div>
          <div className="homeBanner_card">
            <div className="homeBanner_card_img">
              <img src={CardTwoImg} alt="CardTwoImgApp" />
            </div>
            <div className="homeBanner_card_img">
              <img src={CardTwoImgApp} alt="CardTwoImg" />
            </div>
          </div>
        </div>
       <StoreFilter/>

<Network/>
        <div className="categories">
          <PriTitle
            title={"PRODUCT CATEGORIES"}
            subTitle={"The Best Care, Every Step Of The Way"}
            details={`Offering an entire gamut of curative, nutritive, baby care, lifestyle, wellness, fitness, beauty, personal care, homecare products & more coupled with caring & professional health advisory - Green Delta Assist is a household name & a brand of choice in the India.`}
          
          />
          <div className="categories_section">
      <SimpleSlider>
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
      </SimpleSlider>
         

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
                <SimpleSlider>
      <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips1} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips2} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips3} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips4} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips1} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips2} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips3} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
              <div className="library_section_card">
      <div className="library_section_card_img"> <img src={HealthcareTips4} alt="" /></div>
                <h2 className="library_section_card_header">Good Bone Health & Why it Matters</h2>
                <p className="library_section_card_content">Whether you are driving your car, playing a game of badminton, cooking food or simply...</p>
              </div>
         
      
      </SimpleSlider>
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
         
         

         

          <SimpleSlider  >

           
          {/* <div dangerouslySetInnerHTML={{__html:brandlist?.content}}/> */}
          
          
          <div className="careBrands_img">

          <div dangerouslySetInnerHTML={{__html: brandlist.content}}/></div>
          

            {/* <div className="careBrands_img">
              <img src={CareBrands2} alt="" />
            </div>
            <div className="careBrands_img">
              <img src={CareBrands3} alt="" />
            </div>
            <div className="careBrands_img">
              <img src={CareBrands4} alt="" />
            </div>
            <div className="careBrands_img">
              <img src={CareBrands5} alt="" />
            </div>
            <div className="careBrands_img">
              <img src={CareBrands6} alt="" />
            </div>
            <div className="careBrands_img">
              <img src={CareBrands7} alt="" />
            </div> */}

          </SimpleSlider>

          <div className="button_section">
            {" "}
            <Button text={"VIEW MORE BRANDS"} />

        </div>


    </div>
      </div>
      <Outlets/>


    </>
  );
}

export default Home;