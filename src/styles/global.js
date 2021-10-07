import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    html {
        /* a cada 1rem será considerado 10px*/
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
        cursor: pointer;
    }
    
    @media(max-width: 530px) {
        html{
            font-size: 50%;
        }
    }
`;
