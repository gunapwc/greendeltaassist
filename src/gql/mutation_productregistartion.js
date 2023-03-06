import { gql } from '@apollo/client';

const mutationProduct = gql`mutation productRegistration($strength: String,
$product_name: String,
$pharmacy_price: String,
$packing: String,
$public_price: String,
$content: String,
$manufacturer: String,
$category: String,
$category_id: String,
$origin_country: String ){
    productRegistration(
        input:{
        strength: $strength,
        product_name: $product_name,
        pharmacy_price: $pharmacy_price,
        packing: $packing,
        public_price: $public_price,
        content: $content,
        manufacturer: $manufacturer,
        category: $category,
        category_id: $category_id,
        origin_country: $origin_country
        }
    ){
        success_message
    }
}`;

export default mutationProduct;