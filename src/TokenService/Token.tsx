const setAccessToken = (user: string) => {
  localStorage.setItem('accessToken', JSON.stringify(user));
};
const setRefreshToken = (user: string) => {
  localStorage.setItem('RefreshToken', JSON.stringify(user));
};

const getAccessToken = () => {
  return JSON.parse(localStorage.getItem('accessToken') || '{}');
};

const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem('RefreshToken') || '{}');
};

const updatedTokenService = (token: any) => {
  let user = JSON.parse(localStorage.getItem('accessToken') || '{}');
  console.log('older access token', user);
  user = token;
  console.log('user new access token', user);
  localStorage.setItem('accessToken', JSON.stringify(user));
};

const removeToken = () => {
  localStorage.removeItem('accessToken');
  //localStorage.removeItem("RefreshToken")
};

const Token = {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  updatedTokenService,
  removeToken
};
export default Token;
