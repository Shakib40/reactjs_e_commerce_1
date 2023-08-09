export const getUserBasicDetails = () => {
  return (JSON.parse(window.localStorage.getItem('userData')) || {}).user;
};

export const setUserBasicDetails = (data) => {
  const userData = JSON.parse(window.localStorage.getItem('userData'));
  userData.user = data;
  window.localStorage.setItem('userData', JSON.stringify(userData));
};

export const getToken = () => {
  return (JSON.parse(window.localStorage.getItem('userData')) || {}).token;
};

export const isUserLogin = () => {
  return (JSON.parse(window.localStorage.getItem('userData')) || {}).token;
};
export default {
  getUserBasicDetails,
  setUserBasicDetails,
  getToken,
  isUserLogin
};
