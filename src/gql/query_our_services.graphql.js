import { gql } from '@apollo/client';

export default gql`
  query cmsBlocks($identifiers: [String]) {
    cmsBlocks(identifiers: $identifiers) {
      items {
        identifier
        title
        content
      }
    }
  }
`;
