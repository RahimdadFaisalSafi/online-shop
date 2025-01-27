const Product = ({product}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden ">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${product.available ? 'bg-green-500' : 'bg-red-600'}`}></span>
                    <span className="text-sm text-gray-500">{product.available ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <button className={`mt-4 w-full py-2 px-4 rounded ${
                  product.available 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
                disabled={!product.available}>{product.available ? 'Add to Cart' : 'Outof Stock'}</button>
            </div>
        </div>
    )
}
export default Product