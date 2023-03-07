import { gql } from '@apollo/client';

const mutationFranchise = gql`mutation franchiseRequest( $FirstName: String,
        $CurrentAddress: String,
        $MiddleName: String,
        $cNumber: String,
        $Email1: String,
        $LastName: String,
        $city: String,
        $country: String,
        $ownership: String,
        $companyName: String,
        $dateofE: String,
        $Business: String,
        $Services: String,
        $structure: String,
        $amount: String,
        $territory: String,
        $FullName: String,
        $duties: String,
        $phone: String,
        $Email: String,
        $Address: String,
        $los: String){
    franchiseRequest(
        input:{
            first_name: $FirstName
            middle_name: $MiddleName
            last_name: $LastName
            contact_number: $cNumber
            email: $Email1
            current_address: $CurrentAddress
            city: $city
            country: $country
            mgmt_name: $FullName
            mgmt_phone: $phone
            mgmt_email: $Email
            mgmt_address: $Address
            position_duty: $duties
            length_service: $los
            ownership_type: $ownership
            company_name: $companyName
            establishment_date: $dateofE
            business_type: $Business
            products_services: $Services
            ownership_structure: $structure
            capital_amount: $amount
            ownership_territory: $territory 
        }
    ){
        success_message
    }
}`;

export default mutationFranchise;