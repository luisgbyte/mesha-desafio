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

const apiKeyWeather = process.env.REACT_APP_APIKEY_WEATHER;
const apiKeyPlayList = process.env.REACT_APP_APIKEY_PLAYLIST;

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [playlist, setPlaylist] = useState([]);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const convertFahrenheitToCelsius = (temperature) => ((temperature - 32) / 1.8).toFixed(1);

  const calculateMusicalGenres = (temperature) => {
    if (temperature > 32) return 'rock';
    if (temperature > 24 && temperature < 32) return 'pop';
    if (temperature > 16 && temperature < 24) return 'classica';
    return 'lofi';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // fetch weather
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
          temperature: convertFahrenheitToCelsius(data.main.temp),
          city: data.name,
        });

        // calcs
        const temperature = convertFahrenheitToCelsius(data.main.temp);
        const genre = calculateMusicalGenres(temperature);

        // fetch playlist
        axios
          .get('https://shazam.p.rapidapi.com/search', {
            headers: {
              'x-rapidapi-key': apiKeyPlayList,
            },
            params: {
              term: genre,
            },
          })
          .then((response) => {
            const { hits } = response.data.tracks;

            setPlaylist(hits);
          })
          .catch((err) => {
            // eslint-disable-next-line no-alert
            alert(`ops! ocorreu um erro ao buscar ou converter os dados - ${err}`);
          });
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`ops! ocorreu um erro ao buscar ou converter os dados - ${err}`);
      });
  };

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

        {Object.values(weather).length > 0 && playlist.length > 0 ? (
          <>
            <CityInfo>
              <p>{calculateMusicalGenres(weather.temperature)}</p>
              <span>
                {weather.city}
                {' '}
                {new Date().toLocaleDateString()}
              </span>
              <span>
                {weather.temperature}
                {' '}
                graus Celsius
              </span>
            </CityInfo>

            <Wrapper>
              <h4>Músicas Sugeridas</h4>
              <button type='button'>Salvar Playlist</button>
            </Wrapper>

            <Playlist>
              {playlist?.map(({ track }) => (
                <MusicCard key={track.key}>
                  <img src={track.images.background} alt='' />
                  {track.title}
                  {' '}
                  ---
                  {' '}
                  {track.subtitle}
                </MusicCard>
              ))}
            </Playlist>
          </>
        ) : (
          ''
        )}
      </Content>
    </Container>
  );
}

export default Home;
