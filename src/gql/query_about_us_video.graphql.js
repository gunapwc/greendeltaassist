import { gql } from '@apollo/client';

export default gql`
  query {
      cmsBlocks(identifiers: "about-us-video") {
        items {
          identifier
          title
          content
        }
      }
  }
`;
