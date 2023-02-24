import { gql } from '@apollo/client';

export default gql`
  query {
    products(
      filter: {category_id: {eq: "8"}},
      sort: {name: ASC},
      pageSize: 6,
      currentPage: 1
    ) {
      total_count
      items {
        name
        sku
         image {
          url
          label
          position
          disabled
        }
        thumbnail {
          url
          label
          position
          disabled
        }
      }
    }
  }
`;
