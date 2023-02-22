import { gql } from '@apollo/client';

export default gql`
  query {
    categoryList{
      children_count
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
        description
        children {
          id
          level
          name
          path
          url_path
          url_key
          image
          description
        }
      }
    }
  }
`;
