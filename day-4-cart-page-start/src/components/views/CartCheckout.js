import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartItem from "../CartItem";

function CartCheckout() {
  const {productsInCart} = useSelector(state => state.cart)
  console.log(productsInCart)

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col overflow-y-scroll bg-white">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900"
                  id="slide-over-title">Shopping cart</h2>
            </div>
            <div className="mt-8">
              <div className="flow-root">
                <ul  className="-my-6 divide-y divide-gray-200">
                  {productsInCart.map(product => {
                    return (
                      <CartItem {...product}/>                    )
                  })}

                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at
              checkout.</p>
            <div className="mt-6">
              <Link to={'/success-page'}
                 className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCheckout;
