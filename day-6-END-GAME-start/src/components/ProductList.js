import {Link} from "react-router-dom";


function ProductList({id, thumbnail, title, description, price }) {
  return (
    <div key={id} className="group relative flex flex-col gap-y-3">
      <div
        className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <Link to={`/product/${id}`}>
          <img loading={'lazy'}
               src={thumbnail}
               alt={title}
               className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md text-gray-700 relative">
            <Link to={`product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"/>
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">NOK{price}</p>
      </div>
      <Link to={`/product/${id}`} className={'text-white bg-teal-500 mt-auto text-center rounded-md py-2'}>View Product</Link>
    </div>
  );
}

export default ProductList;
