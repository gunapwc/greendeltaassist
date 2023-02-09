import React, { useEffect, useState } from 'react'
import { BlogBanner } from '../../component/blogBanner/BlogBanner'
import { NewsRoomCard, NewsRoomBanner } from '../../component/newsroom/newsroomCard'
import img1 from "./partner.jpg.pagespeed.ic.PaL5pYEgPq.webp";
import { Button } from '../../component/button/button';
import "./newsroom.scss"
const NewsRoom = () => {

    useEffect(() => {

    }, [])
    const [loadMore, setLoadMore] = useState((<div className='grid-news'>
        <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
        <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
    </div>));
    const onLoadMore = () => {
        let a = loadMore+(<div className='grid-news'>
            <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
            <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
        </div>)
        setLoadMore(a);

    };

    return (
        <>

            <div className="container">
                <NewsRoomBanner image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                <div className="grid-news">

                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                </div>
                <div className='grid-news'>
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                </div>
                {/* <div className='grid-news'>
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                </div> */}
                {loadMore}
                <div className="button-div">
                    <Button text="Load More" click={onLoadMore} />
                </div>
            </div>


        </>
    )
}

export default NewsRoom