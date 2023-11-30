import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { signIn, showCart } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import style from './NavBar.module.css' 
import { setFilteredProducts, getAllProducts } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const userLogged = useSelector(state => state.userLogged)
  const allProducts = useSelector(state => state.allProducts) 

  const signOut = () => {
    dispatch(signIn(false))
  };

  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const showShoppingCart = () => {
    setIsShoppingCartOpen(true);
  };

  const [productsState, setProductsState] = useState({
    productsOriginal: [],
    productsCopy: []
  });

  const [filters, setFilters] = useState({
    productName: ''
  });

  useEffect(() => {
    if (allProducts !== undefined) {
      setProductsState({ productsOriginal: allProducts, productsCopy: allProducts });
    }
  }, []);

  const resetProducts = () => {
    dispatch(setFilteredProducts())
  };

  const searchHandleChange = (event) => {
    const { value } = event.target;
      setFilters({ ...filters, productName: value });
      filterSalesByProductName();
  };

  const filterSalesByProductName = () => {
    const filteredProducts = [...productsState.productsCopy].filter((product) => {
      return product.name.toLowerCase().includes(filters.productName.toLowerCase());
    });
    dispatch(setFilteredProducts(filteredProducts))
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">

          {location.pathname === '/admin' ?
            (<a className="navbar-brand fs-3">sniks | <strong>admin</strong></a>)
            : <a className="navbar-brand fs-3">sniks</a>
          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">

            {location.pathname === '/admin' ?
              (<ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={"/admin"} className="nav-link nav-link-hover" aria-current="page">Productos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/admin"} className="nav-link nav-link-hover" aria-current="page">Compras</NavLink>
                </li>
              </ul>) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to={"/"} className="nav-link nav-link-hover" aria-current="page">Inicio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/tienda"} className="nav-link nav-link-hover" aria-current="page" onClick={resetProducts}>Tienda</NavLink>
                  </li>
                </ul>
              )}

            <ul className="navbar-nav ms-auto">
              {(location.pathname === '/tienda' || location.pathname === '/admin') && (
                <div className="d-flex">
                  <form className="d-flex" role="search">
                    <input
                      className={`form-control me-2 ${style.searchInput}`}
                      type="text"
                      aria-label="Search"
                      value={filters.productName}
                      onChange={searchHandleChange}
                      placeholder="Busca por nombre de producto"
                    />
                  </form>
                </div>
              )}

              {(location.pathname === '/' || location.pathname === '/inicioSesion' || location.pathname === '/registro') && (
                <button className="px-3 py-2 mx-2 btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={showShoppingCart}>
                  <i className="bi bi-cart4"></i>
                </button>)}

              {(location.pathname === '/' || location.pathname === '/inicioSesion' || location.pathname === '/registro' || location.pathname === '/tienda') ? (
                <>
                  <li className="nav-item">
                    {!userLogged
                      ? <NavLink to={"/inicioSesion"} className="nav-link active" aria-current="page">Iniciar sesión</NavLink>
                      : <p></p>
                    }
                  </li>

                  <li className="nav-item">
                    {!userLogged
                      ? <NavLink to={"/registro"} className="nav-link active" aria-current="page">Registrarme</NavLink>
                      : <NavLink to={"/"} className="nav-link active" aria-current="page" onClick={signOut}>Cerrar sesión</NavLink>
                    }
                  </li>
                </>
              ) :
                (
                  <>
                    <li className="nav-item">
                      <NavLink to={"/"} className="nav-link active" aria-current="page" onClick={signOut}>Cerrar sesión</NavLink>
                    </li>
                  </>
                )}

            </ul>

          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="carrito-compras-items">
            <ul className="list-group list-group-flush" id="shoppingCartList">
            </ul>
          </div>
          <div >
            <p id="shoppingCartTotal"></p>
            <button type="button" id="clearShoppingCart"> Comprar </button>
          </div>
        </div>
      </div>

      <ShoppingCart isOpen={isShoppingCartOpen} setIsOpen={setIsShoppingCartOpen} />

    </div>

  )
}

export default NavBar;