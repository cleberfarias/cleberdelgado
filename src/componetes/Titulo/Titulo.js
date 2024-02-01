import styled, { keyframes } from 'styled-components';

const flashingTitle = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

const flashingSubtitle = keyframes`
  0%, 50%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ContentContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const TituloTexto = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 1.7rem;
  display: flex;
  color: #fff;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  padding: 25px;
  letter-spacing: 2px;
  animation: ${flashingTitle} 5s infinite alternate; /* Ajuste a duração conforme necessário */

  @media (max-width: 900px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const Subtitulo = styled.p`
  font-family: 'Permanent Marker', cursive;
  display: flex;
  font-size: 1.7rem;
  color: #7FFF00;
  margin-top: 1rem;
  padding: 15px;
  letter-spacing: 2px;
  animation: ${flashingSubtitle} 5s infinite alternate; /* Ajuste a duração conforme necessário */


  @media (max-width: 500px) {
    font-size: 2rem;
    text-align: center;
  }
`;

function Titulo() {
  return (
    <AppContainer>
      <ContentContainer>
        <TituloTexto>
          Cleber Delgado
          <Subtitulo>Desenvolvedor Web</Subtitulo>
        </TituloTexto>
      </ContentContainer>
    </AppContainer>
  );
}

export default Titulo;
