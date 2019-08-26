import axiosInstance from './requestBuilder';


export const logoutUser = () => {
  return axiosInstance.delete('/api/v2/barong/identity/sessions')
    .then(response => response.data)
};

export const loginUser = (email, password, otp_code='', recaptcha_response='') => {
  return axiosInstance.post(
      '/api/v2/barong/identity/sessions',
      { email, password, otp_code, recaptcha_response }
    )
    .then(response => response.data)
};

export const signUpUser = (email, password, refid='', lang='', captcha_response='') => {
  return axiosInstance.post(
    '/api/v2/barong/identity/users',
    { email, password, refid, lang, captcha_response }
  )
    .then(response => response.data)
};