const Beddetails = () => {
    return (
        <div>
            <div className="my-8"></div>
            <div className="flex flex-col md:flex-row bg-gray-100 p-5 rounded-lg shadow-lg max-w-5xl mx-auto">
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://p.rmjo.in/productSquare/wlonv8xg-500x500.webp" 
                        alt="Product Image" 
                        className="w-full max-w-xs rounded-lg"
                    />
                </div>
                <div className="md:ml-5 mt-5 md:mt-0 flex-1">
                    <h1 className="text-3xl font-bold text-gray-800">Godrej King Size Bed</h1>
                    <div className="text-gray-600 mt-4">
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Material: High-quality solid wood frame with a rich walnut finish</li>
                            <li>Dimensions: 60" W x 80" L x 40" H king Size</li>
                            <li>Design: Clean lines with a modern silhouette, perfect for any bedroom aesthetic.</li>
                            <li>Assembly: Easy-to-follow instructions for quick assembly.</li>
                        </ul>
                    </div>
                    <p className="text-2xl text-gray-800 mt-6">Rent: Rs.1000/month</p>
                    <div className="mt-5 space-x-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Rent</button>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="my-8"></div>
        </div>
    );
}

export default Beddetails;
