import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../store/modules/listings";
import {Link} from "react-router-dom";

function Home() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.listings)

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  console.log(products)
  return (
    <div className={'grid grid-cols-3 gap-8'}>
      {products.map(({id, title, description, price, thumbnail}) => {
        return (
          <Link to={`/product/${id}`} key={id}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: <strong>${price}</strong></p>
          </Link>
        )
      })}
    </div>
  );
}

export default Home;
