import { gql } from "@apollo/client";

const queryNewsroom = (id) => {

    return gql`query {
        getNewsDatas(input:{id: ${id}}) {
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
}
export default queryNewsroom;