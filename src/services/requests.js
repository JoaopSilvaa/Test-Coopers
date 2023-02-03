import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test-coopers-back-production.up.railway.app/',
});

export const setToken = (token) => {
  api.defaults.headers.common.authorization = token;
};

export const requestData = async () => {
  const { data } = await api.get('/task');

  return data;
};

export const sendLogin = async (body) => {
  const { data } = await api.post('/user/login', body);

  return data;
};

export const createTask = async (body) => {
  await api.post('/task', body);
};

export const updateTask = async (id) => {
  await api.put(`/task/${id}`);
};

export const deleteTask = async (id) => {
  await api.delete(`/task/${id}`);
};

export const deleteAllTask = async (situation) => {
  await api.delete(`/task/all/${situation}`);
};

export default api;
