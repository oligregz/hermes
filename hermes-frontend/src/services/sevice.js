import axios from 'axios';

const postClient = async () => {
  try {
    const response = await axios.post('http://localhost:3333/v1/client-post', { name: 'John', age: 25 });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getClients = async () => {
  try {
    const response = await axios.get('http://localhost:3333/v1/client-getall');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export {
  postClient,
  getClients,
};