import {Link} from "react-router-dom";


function CartItem({thumbnail, id, title, brand, price}) {
  return (
    <li className="flex py-6">
      <div
        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={thumbnail}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"/>
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div
            className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={'/product/'+id}>{title}</Link>
            </h3>
            <p className="ml-4">NOK {price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <div
          className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty 1</p>
          <div className="flex">
            <button type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500">Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
