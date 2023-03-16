import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleProduct} from "../../store/modules/products";

const SingleProduct = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {singleProduct} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  },[dispatch, id])

  console.log(singleProduct)

  return (
    <div>
      <h1>Single Product {id}</h1>
    </div>
  );
};

export default SingleProduct;
