import { gql } from "@apollo/client";

export default gql `
query getNewsDatas($id:Int) {
    getNewsDatas(input:{id: $id,category_name:"Sports"}) {
      news_id
      category_name
      news_title
      status
      news_description
      thumb_image
      thumb_image_full_path
      created_at
    }
  }
  `;