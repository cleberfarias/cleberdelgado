import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Inicio from './rotas/Inicio';
import SobreMim from './componetes/SobreMim/SobreMim';
import Experiencia from './componetes/Experiencia/Experiencia';
import Projetos from './componetes/Projetos/Projetos';
import Repositorios from './componetes/Repositorios/Repositorios';
import Habilidade from './componetes/Habilidade/Habilidade';
import Formulario from './componetes/Formulário/Formulario';

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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Inicio>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreMim" element={<SobreMim />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Repositorios" element={<Repositorios />} />
          <Route path="/Habilidade" element={<Habilidade />} />
          <Route path="/Formulário" element={<Formulario />} />
        </Routes>
      </Inicio>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
