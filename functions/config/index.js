const functions = require('firebase-functions');

const config = {
  clientIdPaypal: functions.config().client_id_pp.key,
  googleMapsApiKey: functions.config().maps_api_key.key,
};

export default config;
