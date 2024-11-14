

const Tablecomponent = ({products}) => {
    return ( 
        <table className="product-table">
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product ID</th>
                    <th>Product Type</th>
                    <th>Product Name</th>
                    <th>Rent Days</th>
                    <th>Rent Cost</th>
                    <th>Deposit</th>
                    <th>Selling Cost</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td><img src={product.imageUrl} alt={product.productName} className="product-image" /></td>
                        <td>{product.productId}</td>
                        <td>{product.productType}</td>
                        <td>{product.productName}</td>
                        <td>{product.rentDays}</td>
                        <td>{product.rentCost}</td>
                        <td>{product.deposit}</td>
                        <td>{product.sellingCost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default Tablecomponent;