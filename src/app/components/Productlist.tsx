import { products } from "@/app/product";

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold font-integral mb-7 flex justify-center items-center uppercase h-[58px] leading-[57.6px] animate-bounce">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-500 hover:rotate-6 "
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-yellow-500">Rating: {product.rating} ★★★★</p>

              {product.discount && (
                <p className="text-gray-500 line-through">
                  Original Price: ${product.originalPrice}
                </p>
              )}
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-20 flex justify-center">
        <button className="w-full sm:w-[218px] h-[52px] px-[54px] py-4 font-medium font-satoshi text-base leading-[21.6px] border text-center rounded-full text-[#000000] transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-black hover:text-white">
          View All
        </button>
      </div>

      <hr />
    </div>
  );
};

export default ProductList;


