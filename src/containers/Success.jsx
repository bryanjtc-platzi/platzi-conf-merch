import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  let address = '';
  if (typeof buyer[0] === 'undefined')
    address = `1600+Amphitheatre+Parkway,+Mountain+View,+CA`;
  else address = buyer[0].address;
  const location = useGoogleAddress(address);
  return (
    <div className="Sucess">
      <div className="Sucess-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>

        <div className="Sucess-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
