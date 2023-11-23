import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import BooksList from '../pages/BooksList/BooksList';
import BookDetails from '../pages/BookDetails/BookDetails';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BooksList />} />
          <Route path=":bookId" element={<BookDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};

export default Router;
