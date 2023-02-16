
const query = `query {
  cmsBlocks(identifiers: "about-us-video") {
    items {
      identifier
      title
      content
    }
  }
}
`;
export default query;