import axiosInstance from './requestBuilder';

export const order = (price, amount, type) => {
  return axiosInstance.post(
      '/api/v2/peatio/market/orders',
      {
        market: 'ethusd',
        side: type,
        volume: amount,
        price,
      }
    )
    .then(response => response.data)
};
