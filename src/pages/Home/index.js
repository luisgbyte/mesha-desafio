import React, { useState } from 'react';
import axios from 'axios';

import {
  Container,
  Content,
  Form,
  CityInfo,
  Playlist,
  MusicCard,
  Wrapper,
} from './styles';

function Home() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');

  const apiKeyWeather = process.env.REACT_APP_APIKEY_WEATHER;

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: apiKeyWeather,
          q: city,
          units: 'imperial',
        },
      })
      .then((res) => {
        const { data } = res;

        setWeather({
          city: data.name,
          temperature: data.main.temp,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert('Ops! ocorreu um erro, tente novamente...', error);
      });
  };

  const convertFahrenheitToCelsius = (temperature) => ((temperature - 32) / 1.8000).toFixed(1);

  return (
    <Container>
      <Content>
        <h3>VEJA QUAIS MÚSICAS COMBINAM COM O CLIMA DA SUA CIDADE </h3>

        <Form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Em que cidade você está?'
            value={city}
            onChange={handleChangeCity}
            required
          />
          <button type='submit' onClick={() => {}}>
            Buscar
          </button>
        </Form>

        {weather && (
          <CityInfo>
            <span>
              {weather.city}
              {' '}
              06/09/2021
            </span>
            <span>
              {convertFahrenheitToCelsius(weather.temperature)}
              {' '}
              graus
              Celsius
            </span>
          </CityInfo>
        )}

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
