import React, { useState, useEffect } from 'react';

import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FiEye } from 'react-icons/fi';

import { Container, Content, Card } from './styles';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    try {
      setPlaylists(JSON.parse(localStorage.getItem('@my-playlist')));
    } catch (err) {
      alert(`Error! ${err}`);
    }
  }, []);

  const handleDeletePlayList = (id) => {
    const newPlaylist = playlists.filter((track, index) => index !== id);
    setPlaylists(newPlaylist);

    localStorage.setItem('@my-playlist', JSON.stringify(newPlaylist));
  };

  return (
    <Container>
      <Content>
        <h3>Playlists Favoritas:</h3>

        {playlists?.map(({ info }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={index}>
            <p>{index + 1}</p>
            <p>{info.city}</p>
            <p>{info.date}</p>
            <p>{info.hour}</p>
            <p>
              {info.temperature}
              {' '}
              ºC
            </p>
            <p>{info.genre}</p>
            <span>
              <FiEye type='button' onClick={() => alert('')} />
            </span>
            <span>
              <RiDeleteBin2Fill
                type='button'
                onClick={() => handleDeletePlayList(index)}
              />
            </span>
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Playlists;
