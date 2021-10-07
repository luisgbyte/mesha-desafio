import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import NavBar from './components/NavBar';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
