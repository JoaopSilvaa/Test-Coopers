import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
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

export const deleteTask = async (id) => {
  await api.delete(`/task/${id}`);
};

export default api;
