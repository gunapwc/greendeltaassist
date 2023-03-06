import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useLazyQuery,gql } from "@apollo/client";
import queryNewsroom from "../../gql/query_newsroom";

const News = () => {
  const [content, setContent] = useState({});

  const { id } = useParams();

  console.log(id);

  const [data, setNews] = React.useState([]);

//   const { loading, error, data } = useQuery(queryNewsroom(id));

  const[getNews] = useLazyQuery(queryNewsroom, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    onCompleted: (data) => {
      console.log(data);
      if (data?.getNewsDatas[0]) {
        setNews(data?.getNewsDatas[0]);
      }
    }
  });

  React.useEffect(() => {
    console.log(id);
    if (id) {
        getNews({variables: {id:id}});
    }
  }, [id]);

//   useEffect(() => {
//     if (data) {
//       setContent(data.getNewsDatas[0]);
//     }
//     console.log(content);
//   }, [data]);

  return (
    <div className="">
      <div>
        <img
          src={data?.thumb_image_full_path}
          width="100%"
          height="400px"
          style={{ padding: "0% 15% 0% 15%" }}
        />
      </div>
      <div className="container news_div">
        <button>{data?.category_name}</button>
        <p>{data?.created_at}</p>
        <h1>{data?.news_title}</h1>
        <p>{data?.news_description}</p>
      </div>
    </div>
  );
};

export default News;
