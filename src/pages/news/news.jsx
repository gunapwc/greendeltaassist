import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import queryNewsroom from '../../gql/query_newsroom';

const News = () => {
    const [content, setContent] = useState({});
    const {id} = useParams();
    const { loading, error, data } = useQuery(queryNewsroom(id));
    useEffect(() => {
        if (data) {
            setContent(data.getNewsDatas[0]);
        }
        console.log(content);
    }, [data]
    );
    return (
        <div className=''>
            <div >
                <img src={content.thumb_image_full_path} width="100%" height="400px" style={{padding:"0% 15% 0% 15%"}}/>
            </div>
            <div className='container news_div'>
                <button>{content.category_name}</button>
                <p >{content.created_at}</p>
                <h1 >{content.news_title}</h1>
                <p>{content.news_description}</p>
            </div>

        </div>
    )
}

export default News;