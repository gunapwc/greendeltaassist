import React from 'react'
import { BlogBanner1,BlogBanner2,BlogBanner3,BlogBanner4,BlogBanner5 } from '../../utils/images'
import "./BlogBanner.scss"

const BlogBanner = () => {
  return (
    <div className='blog container '>
    <div className="blog_main">
        <img src={BlogBanner1} alt="" />
        <div className='blog_text'>
            <p>Latest Post</p>
            <h>Looking After Your Liver</h>
            <button>KEEP READING</button>
        </div>
    </div>
    <div className='blog_sub'>
        <div className="blog_sub_card">
            <img src={BlogBanner2} alt="" />
            <div className="blog_text">
                <h5>How to Live a Healthy Heart Lifestyle</h5>
            </div>
        </div>
        <div className="blog_sub_card">
            <img src={BlogBanner3} alt="" />
            <div className="blog_text">
                <h5>BackToSchool - 5 Tips for a Healthy Start</h5>
            </div>
        </div>
        <div className="blog_sub_card">
            <img src={BlogBanner4} alt="" />
            <div className="blog_text">
                <h5>How to Maintain Hair in Tough Conditions</h5>
            </div>
        </div>
        <div className="blog_sub_card">
            <img src={BlogBanner5} alt="" />
            <div className="blog_text">
                <h5>The Art of Managing Diabetes</h5>
            </div>
        </div>
    </div>
    </div>
  )
}


const BlogCard = (props) => {


  return (
    <div className='Category_card'>
        <div className='Category_card_inner'>
<button>Skin Care</button>
        <p className='Category_card_inner_date'>January 02, 2023</p>
        </div>
        <h1 className='Category_card_prod_title'>Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder</h1>
        <div className='Category_card_img'>
            <img src="" alt="" />
        </div>
        <p className="Category_card_ditails">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores distinctio, accusantium consectetur mollitia, aspernatur beatae fugit soluta, earum magnam sapiente corporis voluptatibus laboriosam! Odit, a? Laudantium aperiam aliquam nihil nulla!
        </p>
        <div className='Category_card_fav'>
            <img src="" alt="" />
        </div>
       

    </div>
  )
}

// export default BlogBanner

export  {BlogBanner ,BlogCard}