import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlists from '../pages/Playlists';
import Musics from '../pages/Musics';

function routes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='playlists' element={<Playlists />} />
      <Route path='playlists/:id' element={<Musics />} />

      <Route path='*' element={<h1>Error 404 - Página não encontrada!</h1>} />
    </Routes>
  );
}

export default routes;
