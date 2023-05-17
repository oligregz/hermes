import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Registration from '../pages/Register/index.js';

const Private = ({ Item }) => {
  const logged = false;

  return logged > 0 ? <Item /> : <Login />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/home' element={ <Private Item={ Home } />}/>
          <Route  path='/' element={ <Login /> }/>
          <Route exact path='/register' element={ <Registration /> }/>
          <Route path='*' element={ <Login /> }/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;
