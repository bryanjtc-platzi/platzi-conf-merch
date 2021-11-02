import axios from 'axios';

const fetchEnv = async () => {
  const response = await axios.get(`https://us-central1-platzi-conf-merch-313921.cloudfunctions.net/getEnv`);
  return response.body;
};

const config = {
  clientIdPaypal: fetchEnv().client_id_pp.key,
  googleMapsApiKey: fetchEnv().maps_api_key.key,
};

export default config;
