import React from 'react';

import {
  Container, Content, Form, CityInfo, Playlist, MusicCard, Wrapper,
} from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <h3>VEJA QUAIS MÚSICAS COMBINAM COM O CLIMA DA SUA CIDADE </h3>

        <Form>
          <input type='text' placeholder='Em que cidade você está?' required />
          <button type='button' onClick={() => {}}>
            Buscar
          </button>
        </Form>

        <CityInfo>
          <span>Brasília 06/09/2021</span>
          <span>38º graus Celsius</span>
        </CityInfo>

        <Wrapper>
          <h4>Músicas Sugeridas</h4>
          <button type='button'>Salvar Playlist</button>
        </Wrapper>

        <Playlist>
          <MusicCard>
            <img src='' alt='' />
            Hotel Califórnia
          </MusicCard>
          <MusicCard>
            <img src='' alt='' />
            Thunder
          </MusicCard>
          <MusicCard>
            <img src='' alt='' />
            Boulevard Of Broken Dreams
          </MusicCard>
          <MusicCard>
            <img src='' alt='' />
            Rockstar
          </MusicCard>
          <MusicCard>
            <img src='' alt='' />
            Rockstar
          </MusicCard>
          <MusicCard>
            <img src='' alt='' />
            Rockstar
          </MusicCard>
        </Playlist>
      </Content>
    </Container>
  );
}

export default Home;
