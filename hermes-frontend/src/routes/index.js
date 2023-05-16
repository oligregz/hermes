import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';

const Private = ({ Item }) => {
  const logged = false;

  return logged > 0 ? <Item /> : <Login />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={ <Login /> }/>
          <Route  path='/home' element={ <Private Item={ Home } />}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;
