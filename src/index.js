import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './componetes/Header/Header';
import Footer from './componetes/Footer/Footer';


import ImagemDeFundo from '../src/imagens/logo.jpg';
import Inicio from './rotas/Inicio';




const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  list-style: none;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
    margin: 0 10px;
  }
  width: 100vw;
  min-height: 100vh;
  background: url(${ImagemDeFundo}) center;
  background-size: cover;  
}`



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <GlobalStyle/>
    <Header/>
    <Inicio/>
    
  </React.StrictMode>
);


reportWebVitals();
