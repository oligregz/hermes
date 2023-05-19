import axios from 'axios';

const postClient = async (name, telephone) => {
  try {
    const response = await axios.post('http://localhost:3333/v1/client-post', {
      name: name,
      telephone: telephone,
    });
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

const getReserves = async () => {
  try {
    const response = await axios.get('http://localhost:3333/v1/reserve-getall');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getClientById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3333/v1/client-get/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

const postTable = async () => {
  try {
    const response = await axios.post(`http://localhost:3333/v1/table-post`,
    {
      capacity: 4,
      busy: false,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

const postReserve = async (obj) => {
  try {
    const response = await axios.post(`http://localhost:3333/v1/table-post`,
    obj);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

const lessThanFifteenReserves = async (date) => {
  try {
    const response = await axios.get(`http://localhost:3333/v1/reserve-fifteen`, {
      date: date
    });
    // console.log(response.data.message);
    return response.data.message;
  } catch (e) {
    console.error(e);
  }
}

export {
  postClient,
  getClients,
  getReserves,
  getClientById,
  postTable,
  postReserve,
  lessThanFifteenReserves,
};