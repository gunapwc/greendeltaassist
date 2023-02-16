import { gql } from '@apollo/client';

export default gql`
query Query {
  country(code: "BR") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;
