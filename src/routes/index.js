import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlists from '../pages/Playlists';

function routes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playlists' element={<Playlists />} />
      <Route path='*' element={<h1>Error 404 - Página não encontrada!</h1>} />
    </Routes>
  );
}

export default routes;
