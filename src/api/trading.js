import axiosInstance from './requestBuilder';


export const getData = () => {
  return axiosInstance.get('/api/v2/peatio/public/markets/ethusd/k-line')
    .then(response => response.data);
};

