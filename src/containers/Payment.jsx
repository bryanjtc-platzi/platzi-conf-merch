/* eslint-disable no-console */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import { handleSumTotal } from '../utils/index';
import config from '../config/index';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const { clientIdPaypal } = config;
  const history = useNavigate();
  const options = {
    clientId: clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  };
  const style = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handleApprove = (data) => {
    const newOrder = {
      buyer,
      product: cart,
      payment: data,
    };
    addNewOrder(newOrder);
    history.push('/checkout/success');
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div
            className="Payment-item"
            key={`${item.id}_${shortid.generate()}`}
          >
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={options}
            style={style}
            amount={handleSumTotal(cart)}
            onButtonReady={() => console.log('Start Payment')}
            onApprove={(data) => handleApprove(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
