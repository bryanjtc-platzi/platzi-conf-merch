import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (item, itemNumber) => () => {
    removeFromCart(item, itemNumber);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        <h3>{cart.length > 0 ? 'Lista de pedidos:' : 'Sin pedidos'}</h3>
        {cart.map((item, itemNumber) => (
          <div
            className="Checkout-item"
            key={`${item.id}_${nanoid()}`}
          >
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, itemNumber)}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
