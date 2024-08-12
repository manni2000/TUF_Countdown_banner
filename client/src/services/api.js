import axios from 'axios';

// const API_URL = 'https://tuf-countdown-banner-api.onrender.com/api';

export const API_URL = process.env.NODE_ENV === 'development' ?
    `http://localhost:5000/api` :
   'https://tuf-countdown-banner-api.onrender.com/api';

export const getBanner = async () => {
  const response = await axios.get(`${API_URL}/banner`);
  return response.data;
};

export const updateBanner = async (data) => {
  const response = await axios.put(`${API_URL}/banner`, data);
  return response.data;
};
