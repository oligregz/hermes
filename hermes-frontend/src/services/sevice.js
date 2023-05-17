import axios from 'axios';

const postClient = async (name, telephone) => {
  try {
    const response = await axios.post('http://localhost:3333/v1/client-post', {
      name: name,
      telephone: telephone,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getClients = async () => {
  try {
    const response = await axios.get('http://localhost:3333/v1/client-getall');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  postClient,
  getClients,
};