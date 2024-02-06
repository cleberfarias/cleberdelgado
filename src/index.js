import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './componetes/Header/Header';
import Fundo from './imagens/inovacao-e-tecnologia.jpg';
import Inicio from './rotas/Inicio';
import Footer from './componetes/Footer/Footer';





const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(90deg, #002f52 100%, #326589 500%);
    background-position: center;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
  }


  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <GlobalStyle/>
    <Header/>
    <Inicio/>
    <Footer/>
       
  </React.StrictMode>
);


reportWebVitals();
