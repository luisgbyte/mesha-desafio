import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

function routes() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route path='*' element={<h1>Error 404 - Página não encontrada!</h1>} />
    </Routes>
  );
}

export default routes;
