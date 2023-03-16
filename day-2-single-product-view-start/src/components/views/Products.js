import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/modules/products";
import {Link} from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col gap-y-3">
                <div
                  className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 relative">
                      <Link to={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">NOK{product.price}</p>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-auto"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
