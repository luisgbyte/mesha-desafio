import React, { useMemo } from 'react';

import { Container, Content, Card } from './styles';

function Playlists() {
  const playlists = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('@my-playlist'));
    } catch (err) {
      alert(`Error! ${err}`);
    }

    return null;
  });

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
            <p>{info.temperature}</p>
            <p>{info.genre}</p>
          </Card>
        ))}
      </Content>
    </Container>
  );
}

export default Playlists;
