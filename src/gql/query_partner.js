import { gql } from "@apollo/client";

const queryPartner = gql`query{
  cmsBlocks(identifiers: "partner-block") {
    items {
      identifier
      title
      content
    }
  }
}
`;
export default queryPartner;
// url_key
// content_heading
// page_layout
// meta_title
// meta_keywords
// meta_description