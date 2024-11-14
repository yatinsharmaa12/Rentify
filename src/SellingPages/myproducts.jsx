import TableComponent from './Tablecomponent';
import './myproducts.css'; 

const Myproducts = () => {

    const products = [
        { imageUrl:'https://p.rmjo.in/productSquare/wlonv8xg-500x500.webp',productId: '1', productType: 'Furniture', productName: 'Deluxe Queen Size Bed', rentDays: '30', rentCost: '$50', deposit: '$200', sellingCost: '$499' },
        { imageUrl:'https://i5.walmartimages.com/asr/31499151-db7b-4183-9015-49989b92777c.c815a6c079c96416c1ab60b4f7cc4790.jpeg',productId: '2', productType: 'Appliances', productName: 'Microwave Oven', rentDays: '30', rentCost: '$20', deposit: '$50', sellingCost: '$199' },
        // Add more products as needed
    ];
    return ( 
        <div className="Myproducts">
            <h1>Product List</h1>
            <TableComponent products={products} />
        </div>
     );
}
 
export default Myproducts;