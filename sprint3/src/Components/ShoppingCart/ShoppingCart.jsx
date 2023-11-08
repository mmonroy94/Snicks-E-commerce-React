import { useSelector } from "react-redux"
import CartCards from "../CartCards/CartCards";

const ShoppingCart = ({ isOpen, setIsOpen }) => {
  const products = useSelector(state => state.shoppingCartItems)
  const signIn = useSelector(state => state.userLogged)

  console.log('PRODUCTOS DEL CARRITO / VISTA SHOPPING CART', products);

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (products.length === 0) {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  }

  const buy = () => {
    ev.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log('Inicio de sesión exitoso:', response.data);
        dispatch(signIn(true))
        navigate("/")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="carrito-compras-items">
            <ul className="list-group list-group-flush" id="shoppingCartList">
              <CartCards/>
            </ul>
          </div>
          {!signIn && <p className="text-danger text-center">* Inicia sesión para completar la compra</p>}
          <div className="d-flex justify-content-end">

            <p id="shoppingCartTotal"></p>

            <button type="button" id="clearShoppingCart" className="btn btn-primary w-100" disabled={disableByEmptyProps()}> Comprar </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart