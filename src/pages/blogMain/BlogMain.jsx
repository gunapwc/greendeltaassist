import React, { useEffect } from 'react'
import {BlogBanner,BlogCard} from '../../component/blogBanner/BlogBanner'
import { productList } from '../../utils/listData'

const BlogMain = () => {

  useEffect(()=>{
    productList.sort(function (a, b) {
      if (a.product < b.product) {
        return -1;
      }
      if (a.product > b.product) {
        return 1;
      }
      return 0;
    });
    const result = productList.filter((v, i, a) => a.findIndex(t => (t.product === v.product)) === i)
    result.sort(function(a,b){
      return a.id - b.id
    })
    console.log('pr',result)
  },[])

  return (
    <>

    <BlogBanner/>

    <div  className="container">
    
    <BlogCard/>
    </div>

    </>
  )
}

export default BlogMain