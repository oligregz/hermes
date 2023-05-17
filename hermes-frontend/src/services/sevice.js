import axios from 'axios';

const postData = async () => {
  try {
    const response = await axios.post('https://localhost/v1/client-post', { name: 'John', age: 25 });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default postData;