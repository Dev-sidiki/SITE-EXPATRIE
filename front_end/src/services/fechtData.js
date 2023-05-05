import axios from "axios";

export const getDataAPI = async (url, token) => {
  const res = await axios
    .get(`${process.env.REACT_APP_API_URL}/api/${url}`, {
      headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const postDataAPI = async (url, data) => {
  const res = await axios
    .post(`${process.env.REACT_APP_API_URL}/api/${url}`, data, {
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const postDataWithTokenAPI = async (url, data, token) => {
  const res = await axios
    .post(`${process.env.REACT_APP_API_URL}/api/${url}`, data, {
      headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const putDataAPI = async (url, data, token) => {
  const res = await axios
    .put(`${process.env.REACT_APP_API_URL}/api/${url}`, data, {
      headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const patchDataAPI = async (url, data /*token*/) => {
  const res = await axios
    .patch(`${process.env.REACT_APP_API_URL}/api/${url}`, data, {
      // headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const patchDataWithTokenAPI = async (url, data, token) => {
  const res = await axios
    .patch(`${process.env.REACT_APP_API_URL}/api/${url}`, data, {
      headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios
    .delete(`${process.env.REACT_APP_API_URL}/api/${url}`, {
      headers: { Authorization: token },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};
