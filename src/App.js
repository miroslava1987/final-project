import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles/style.scss';
import { useErrorBoundary } from 'use-error-boundary'

import { Navigation } from './pages/navigation';
import { getProducts } from './store/products/operations';
import { getCustomer } from './store/customer/operations';
import { Header } from './commons/Header/Header';
import { Footer } from './commons/Footer';
import { ScrollToTop } from './commons/ScrollToTop';
import { NotFoundPage } from './pages/404';
import {Loader} from './components/Loader';

function App () {
  const dispatch = useDispatch();
  const [dataLoad, setDataLoad] = useState(false);
  useEffect(() => {
    Promise.all([dispatch(getProducts()), dispatch(getCustomer())]).then(() => setDataLoad(true))
  }, [dispatch]);

  const {
    ErrorBoundary,
    didCatch
  } = useErrorBoundary();

  return (
    <>
      {didCatch ? (<NotFoundPage/>
      ) : (
        <ErrorBoundary>
          <Header/>
          <ScrollToTop/>
          {dataLoad ? <Navigation/> : <Loader />}
          <Footer/>
        </ErrorBoundary>
      )
      }
    </>
  );
}

export default App;
