import React, { Suspense } from 'react';
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
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
