import {useSelector} from "react-redux";

function Header() {
  const {cart} = useSelector(state => state.cart)
  return (
    <div>
      <div>🛒 <span>{cart.length}</span></div>
    </div>
  );
}

export default Header;
