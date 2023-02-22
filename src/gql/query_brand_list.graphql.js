import { gql } from '@apollo/client';

export default gql`
  query {
      cmsBlocks(identifiers: "brands") {
        items {
          identifier
          title
          content
        }
      }
  }
`;
