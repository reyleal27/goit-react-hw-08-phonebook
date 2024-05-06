import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Outlet></Outlet>
        </Suspense>
      <Footer/>
    </>
  );
};
