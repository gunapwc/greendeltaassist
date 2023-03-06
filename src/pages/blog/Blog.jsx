import React, { useEffect } from "react";
import "./Blog.scss";
import Banner from "../../component/banner/Banner";
import PriTitle from "../../component/innerSection/PriTitle";
import { BlogImage } from "../../utils/images";
import { useParams } from "react-router-dom";
import { useQuery,useLazyQuery, gql } from "@apollo/client";
import Blogs from "../../gql/query_blog.graphql";

function Blog() {
  
  const { id } = useParams();

  console.log(id);
  
  const [blog, setBlog] = React.useState([]);

  const[getBlog] = useLazyQuery(Blogs, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    onCompleted: (data) => {
      console.log(data);
      if (data?.getBlogDatas[0]) {
        setBlog(data?.getBlogDatas[0]);
      }
    }
  });

  React.useEffect(() => {
    console.log(id);
    if (id) {
      getBlog({variables: {id:id}});
    }
  }, [id]);


  return (
    
    <div className="container">

      <Banner
        img={blog?.banner_image_full_path}
        title={blog?.category_name}
        text={
          blog?.blog_title
        }
      />

      <PriTitle
        details={
          blog?.blog_description
        }
      />
    </div>
   

  );
}

export default Blog;
