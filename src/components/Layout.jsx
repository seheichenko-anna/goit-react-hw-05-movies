import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import s from './Navigation/Navigation.module.css';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <div className={s.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
