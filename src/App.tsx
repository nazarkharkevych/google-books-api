import * as React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
