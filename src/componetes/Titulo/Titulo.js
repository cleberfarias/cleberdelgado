import styled, { keyframes } from 'styled-components';
import Perfil from '../../imagens/fotor-2024020116380.png';

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

const Centralizado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #000000 35%, #808080 165%);
`;

const ContentContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const TituloTexto = styled.h2`
font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #fff;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  padding: 25px;
  letter-spacing: 2px;
  animation: ${flashingTitle} 10s infinite alternate;

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const Subtitulo = styled.p`
font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: #7FFF00;
  margin-top: 1rem;
  padding: 15px;
  letter-spacing: 2px;
  animation: ${flashingSubtitle} 15s infinite alternate;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  animation: ${flashingSubtitle} 25s infinite alternate;
  &:hover {
    animation: none;
    
    transition: background-color 0.3s ease;
`;

function Titulo() {
  return (
    <AppContainer>
      <ContentContainer>
        <Centralizado>
          <Image src={Perfil} alt="foto do Perfil" />
          <TituloTexto>
            Eu sou Cleber Delgado
            <Subtitulo>Desenvolvedor Front End</Subtitulo>
          </TituloTexto>
        </Centralizado>
      </ContentContainer>
    </AppContainer>
  );
}

export default Titulo;
