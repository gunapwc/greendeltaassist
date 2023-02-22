import { gql } from '@apollo/client';

export default gql`
  query {
    getStoreRecords(input: {area: "",country :""}){
      store_id,
      store_name,
      store_street_address_line_1,
      store_area,
      store_address_line_2,
      store_content,
      store_active_time,
      store_contact_number
    }  
  }
`;
