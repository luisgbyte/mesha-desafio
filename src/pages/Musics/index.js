import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import {
  Container, Button, Playlist, MusicCard,
} from './styles';

function Musics() {
  const [musics, setMusics] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    try {
      const REAL_ID = id - 1;

      const storage = JSON.parse(localStorage.getItem('@my-playlist'));
      const { playlist } = storage[REAL_ID];

      setMusics(playlist);
    } catch (err) {
      alert(`Error! ${err}`);
    }
  }, []);

  return (
    <Container>
      <Button type='button' onClick={() => navigate('/playlists')}>
        VOLTAR
      </Button>
      <Playlist>
        {musics?.map(({ track }) => (
          <MusicCard key={track.key}>
            <img src={track.images.background} alt='' />
            {track.title}
            {track.subtitle}
          </MusicCard>
        ))}
      </Playlist>
    </Container>
  );
}

export default Musics;
