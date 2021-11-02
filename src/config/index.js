import axios from 'axios';

const fetchEnv = async () => {
  const response = await axios.get(`https://us-central1-platzi-conf-merch-313921.cloudfunctions.net/getEnv`);
  return response.data;
};

const env = await fetchEnv();

const config = {
  clientIdPaypal: env.client_id_pp.key,
  googleMapsApiKey: env.maps_api_key.key,
};

export default config;
