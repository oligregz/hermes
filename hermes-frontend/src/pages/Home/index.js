import React from 'react';
import Reservevation from '../../components/Forms/Reserve';
import Reserves from '../../components/List/Ul';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Reservevation />
      <Reserves />
    </div>
  )
}

export default Home;
