import { gql } from '@apollo/client';

export default gql`
query getBlog($id:Int){
  getBlogDatas(input: {id: $id}){
       blog_id
       category_name
       blog_title
       status 
       blog_description
       thumb_image
       banner_image 
       thumb_image_full_path
       banner_image_full_path
       created_at
   }
}
`;
