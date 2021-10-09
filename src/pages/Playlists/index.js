import React, { useState, useEffect } from 'react';

import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FiEye } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { Container, Content, Card } from './styles';

function Playlists() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    try {
      const getLocalStorage = localStorage.getItem('@my-playlist')
        ? JSON.parse(localStorage.getItem('@my-playlist'))
        : null;

      if (getLocalStorage === null) return;

      setPlaylists(getLocalStorage);
    } catch (err) {
      alert(`Error! ${err}`);
    }
  }, []);

  const handleDeletePlaylist = (id) => {
    const newPlaylist = playlists.filter((track, index) => index !== id);
    setPlaylists(newPlaylist);

    localStorage.setItem('@my-playlist', JSON.stringify(newPlaylist));
  };

  const handleViewPlaylist = (id) => {
    navigate(`${id + 1}`);
  };

  return (
    <Container>
      <Content>
        {playlists.length > 0 ? (
          <>
            <h3>Playlists Favoritas:</h3>
            {playlists?.map(({ info }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={index}>
                <p>{index + 1}</p>
                <p>{info.city}</p>
                <p>{info.date}</p>
                <p>
                  {info.hour}
                </p>
                <p>
                  {info.temperature}
                  {' '}
                  ºC
                </p>
                <p>{info.genre}</p>
                <span>
                  <FiEye
                    type='button'
                    size={20}
                    onClick={() => handleViewPlaylist(index)}
                  />
                </span>
                <span>
                  <RiDeleteBin2Fill
                    type='button'
                    size={20}
                    onClick={() => handleDeletePlaylist(index)}
                  />
                </span>
              </Card>
            ))}
          </>
        ) : (
          <h3>Você ainda não possui playlists salvas...</h3>
        )}
      </Content>
    </Container>
  );
}

export default Playlists;
