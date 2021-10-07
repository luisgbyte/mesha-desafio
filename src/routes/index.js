import { Routes, Route } from 'react-router-dom';

function routes() {
  return (
    <Routes>
      <Route
        path='/'
        element={<h1>Home</h1>}
      />
      <Route path='*' element={<h1>Error 404 - Página não encontrada!</h1>} />
    </Routes>
  );
}

export default routes;
