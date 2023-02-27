import React, { useEffect, useState } from 'react'
import { BlogBanner } from '../../component/blogBanner/BlogBanner'
import { NewsRoomCard, NewsRoomBanner } from '../../component/newsroom/newsroomCard'
import img1 from "./partner.jpg.pagespeed.ic.PaL5pYEgPq.webp";
import { Button } from '../../component/button/button';
import { useQuery, gql } from '@apollo/client';
import "./newsroom.scss"
import News_Room from '../../gql/query_newsroom';
import { useNavigate } from 'react-router-dom';
const NewsRoom = () => {
    let Navigate = useNavigate()
    const onclickCard = (id) => {
        Navigate(`../news/${id}`);
    };
    const [content, setContent] = useState([]);
    const { loading, error, data } = useQuery(News_Room,{variables:{ id:"0"}});
    useEffect(() => {
        if (data) {
            setContent(data.getNewsDatas);
        }
    }, [data]
    );
    const [loadMore, setLoadMore] = useState();
    useEffect(()=>{
        setLoadMore((<div className='grid-news'>
        {content.map((value, index) => {
            if (index > 2 && index < 5  ) {
                return <NewsRoomCard key={index} image={value.thumb_image_full_path} date={value.created_at} category={value.category_name} title={value.news_title} click={() => { onclickCard(value.news_id) }} />
            }
        })}
    </div>))
    },[content])
    
    const [gridIndex,setGridIndex] = useState(4)
    const onLoadMore = () => {
        let a = <>{loadMore}<div className='grid-news'>
            {content.map((value, index) => {
                if (  index > gridIndex && index < (gridIndex+3))  {
                    return <NewsRoomCard key={index} image={value.thumb_image_full_path} date={value.created_at} category={value.category_name} title={value.news_title} click={() => { onclickCard(value.news_id) }} />
                }
            })}
        </div></>
        setGridIndex(gridIndex+2);
        setLoadMore(a);

    };

    return (
        <>

            <div className="container">
                <NewsRoomBanner image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                <div className="grid-news">
                    {content.map((value, index) => {
                        if (index < 3) {
                            return <NewsRoomCard  key={index} image={value.thumb_image_full_path} date={value.created_at} category={value.category_name} title={value.news_title} click={() => { onclickCard(value.news_id) }} />
                        }
                    })}

                    {/* <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" />
                    <NewsRoomCard image={img1} date="January 02, 2023" category="Health" title="Enhance your beauty & improve joint health with Country Life Maxi- Collagen C&A+ Biotin Powder" /> */}
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