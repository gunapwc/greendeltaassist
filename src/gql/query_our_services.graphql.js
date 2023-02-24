import { gql } from '@apollo/client';

export default gql`
  query {
    cmsBlocks(identifiers: ["pharmacy-retailing", "home-delivery", "online-services", "rewards-program", "tele-consultation"]) {
      items {
        identifier
        title
        content
      }
    }
  }
`;
