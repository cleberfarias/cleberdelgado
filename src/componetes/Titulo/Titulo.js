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

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  animation: ${flashingSubtitle} 25s infinite alternate;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TituloTexto = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  padding: 25px;
  letter-spacing: 2px;
  display: flex;
  animation: ${flashingTitle} 10s infinite alternate;

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Subtitulo = styled.p`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #00ccff;
  margin-top: 1rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  padding: 15px;
  letter-spacing: 2px;
  animation: ${flashingSubtitle} 15s infinite alternate;

  @media (max-width: 500px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

const ApresentacaoConteudoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end; /* Mover para o canto direito */
margin-top: 20px;
margin-left: auto; /* Mover para o canto direito */
`;

const ApresentacaoConteudoTitulo = styled.div`
  font-size: 1.2rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: #00ccff;
  padding: 15px;
  letter-spacing: 2px;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const ApresentacaoConteudoSubtitulo = styled.div`
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: #fff;
  background: linear-gradient(90deg, #002f52 35%, #326589 165%);
  -webkit-background-clip: text;
  padding: 20px;
  letter-spacing: 2px;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

function Titulo() {
  return (
    <AppContainer>
      <ImageContainer>
        <Image src={Perfil} alt="foto do Perfil" />
      </ImageContainer>
      <TextContainer>
        <TituloTexto>
          Eu sou Cleber Delgado
          <Subtitulo>Desenvolvedor Front End</Subtitulo>
        </TituloTexto>
        <ApresentacaoConteudoContainer>
          <ApresentacaoConteudoTitulo>Eleve seu negócio digital a outro nível</ApresentacaoConteudoTitulo>
          <ApresentacaoConteudoSubtitulo>com um Front-end de qualidade!</ApresentacaoConteudoSubtitulo>
        </ApresentacaoConteudoContainer>
      </TextContainer>
    </AppContainer>
  );
}

export default Titulo;
