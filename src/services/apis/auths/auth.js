import instance from "../instance";

export const apiSignup = (data) => {
  const url = `/auth/signup`;
  return instance.post(url, data);
};
export const apiLogin = (data) => {
  const url = `/auth/signin`;
  return instance.post(url, data);
};
export const apiCheckUserInfo = (params) => {
  const url = `auth/checkLogin`;
  return instance.get(url, { params });
};
