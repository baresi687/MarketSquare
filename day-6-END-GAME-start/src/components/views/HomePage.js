import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../store/modules/productsSlice';
import ProductList from "../ProductList";
import ErrorComponent from "../ErrorComponent";


function HomePage() {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    const {isError} = useSelector(state => state.error)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    // Note that the dispatch function is added to the useEffect() dependency array to ensure that the fetchProducts() action is only dispatched once, when the component mounts.

    const memoProducts = useMemo(() => products, [products])
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {memoProducts.map((product) => (
                            <ProductList key={product.id} {...product}/>
                        ))}
                    </div>
                </div>
            </div>
            {isError && <ErrorComponent message={'Something went wrong'}/>}
        </div>
    );
}

export default HomePage;
