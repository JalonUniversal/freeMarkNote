import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '@/pages/App/index';
import Record from '@/pages/Record/index';

const Main = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/record/:id' element={<Record />} />
      </Routes>
    </HashRouter>
  );
};

export default Main;
