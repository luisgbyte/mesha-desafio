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

const API_KEY_WEATHER = process.env.REACT_APP_APIKEY_WEATHER;
const API_KEY_PLAYLIST = process.env.REACT_APP_APIKEY_PLAYLIST;

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    // fetch weather
    await axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: API_KEY_WEATHER,
          q: city,
          units: 'imperial',
        },
      })
      .then((res) => {
        const { data } = res;

        const temperature = convertFahrenheitToCelsius(data.main.temp);
        const genre = calculateMusicalGenres(temperature);

        setWeather({
          city: data.name,
          temperature,
          genre,
        });

        // fetch playlist
        axios
          .get('https://shazam.p.rapidapi.com/search', {
            headers: {
              'x-rapidapi-key': API_KEY_PLAYLIST,
            },
            params: {
              term: genre,
            },
          })
          .then((response) => {
            const { hits } = response.data.tracks;

            setPlaylist(hits);

            setLoading(false);
          })
          .catch(() => {
            setLoading(false);

            // eslint-disable-next-line no-alert
            alert(
              'ops! ocorreu um erro ao buscar ou converter os dados',
            );
          });
      })
      .catch(() => {
        setLoading(false);

        // eslint-disable-next-line no-alert
        alert('ops! ocorreu um erro ao buscar ou converter os dados');
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
        {!!loading && <span>Carregando...</span>}

        {Object.values(weather).length > 0 && playlist.length > 0 && !loading ? (
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
              <button type='button' onClick={() => {}}>
                Salvar Playlist
              </button>
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
