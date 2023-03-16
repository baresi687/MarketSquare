import {Outlet, Routes, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";


function Layout () {
  return (
    <>
    <nav className={'flex gap-2'}>Nav bar
      <NavLink to={'/'}>Home</NavLink>
    </nav>
    <Outlet/>
    <footer>Footer</footer>
    </>
  )
}
function App() {

  return (
    <div className={'max-w-5xl mx-auto my-4 mx-auto'}>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={'/product/:id'} element={<ProductDetails/>}/>
            <Route path={'*'} element={<div>Not Found</div>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
