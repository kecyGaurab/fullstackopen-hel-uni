import axios from 'axios';
const baseUrl = 'http://localhost:3003/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};
const create = (nameObj) => {
 return axios.post(baseUrl,nameObj)
};

export default {
  getAll,
  create
};
