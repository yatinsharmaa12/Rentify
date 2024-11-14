import './sellingPage.css'
import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';

const SellingPage = () => {
    const [rows, setRows] = useState([
        { productId: '', productType: '', productName: '', rentDays: '', rentCost: '', deposit: '', sellingCost: '',productImage: "" }
    ]);

    const addRow = () => {
        setRows([
            ...rows,
            { productId: '', productType: '', productName: '', rentDays: '', rentCost: '', deposit: '', sellingCost: '',productImage: "" }
        ]);
    };

    const productNames = {
        'furniture': 'Furniture',
        'appliances': 'Electric appliances',
        'virtual-space': 'Space-Virtual',
        'real-estate': 'Space-Real Estate',
        'tools': 'Education Tools',
        'travel': 'Travel',
        'household': 'Household Items',
        'functions': 'Functions and Festives'
    };

    const removeRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const handleChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const addToCart = () => {
        alert('Items added to cart!');
    };
    const updateProductName = (index, category) => {
        const newRows = [...rows];
        newRows[index].productName = productNames[category] || '';
        setRows(newRows);
    };


    return (
        <div className="sells">
            <div className="space"></div>
            <div className="mysellings" id="mysellings">
                <NavLink to="/myproducts">
                <button>My Products</button>
                </NavLink>
            </div>
            <div className="sellContainer">
            <label htmlFor="category">Choose the Category of Product you want to Sell:</label>
            <select id="category" onChange={(e) => updateProductName(rows.length - 1, e.target.value)} >
                <option value="furniture">Furniture</option>
                <option value="appliances">Electric Appliances</option>
                <option value="virtual-space">Space - Virtual</option>
                <option value="real-estate">Space - Real Estate</option>
                <option value="tools">Educational Tools</option>
                <option value="travel">Travel</option>
                <option value="household">Household Items</option>
                <option value="functions">Functions and Festivals</option>
            </select>

            <button onClick={addRow} id="addRowBtn">Add Row</button>

            <table id="productTable">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Type</th>
                        <th>Product Name</th>
                        <th>Can Rent for Month</th>
                        <th>Cost for Renting</th>
                        <th>Deposit Money</th>
                        <th>Cost for Selling</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="number"
                                    value={row.productId}
                                    onChange={(e) => handleChange(index, 'productId', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.productType}
                                    onChange={(e) => handleChange(index, 'productType', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.productName}
                                    onChange={(e) => handleChange(index, 'productName', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={row.rentDays}
                                    onChange={(e) => handleChange(index, 'rentDays', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.rentCost}
                                    onChange={(e) => handleChange(index, 'rentCost', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.deposit}
                                    onChange={(e) => handleChange(index, 'deposit', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.sellingCost}
                                    onChange={(e) => handleChange(index, 'sellingCost', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="file"
                                    value={row.productImage}
                                    onChange={(e) => handleChange(index, 'productImage', e.target.value)}
                                />
                            </td>
                            <td>
                                <button className="removeRowBtn" onClick={() => removeRow(index)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={addToCart}>Add</button>

            <p>
                Explore a world of convenience and choice with our diverse range of products. High-quality items from trusted sellers. Flexible rental options to suit your needs. Secure payment options for a worry-free transaction.
            </p>
        </div>
        <div className="space"></div>
        </div>
    );
};

export default SellingPage;
