import styled, { keyframes } from 'styled-components';
import OpcoesHeader from '../OpecoesHeader/OpcoesHeader.js';

// Importe a fonte
//import 'https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One:ital@1&family=Noto+Serif+Old+Uyghur&family=Permanent+Marker&display=swap';

const HeaderContainer = styled.header`
  background-image: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  color: #22778b; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
const rotateText = keyframes`
  100% {
    transform: rotateX(360deg);
  }
  0% {
    transform: rotateX(0deg);
  }
`;

const TituloPessoal = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: bold;
  color: linear-gradient(90deg, #002f52 35%, #326589 165%);
  animation: ${rotateText} 4s linear infinite;
  transform-origin: center bottom;
  paddin: auto;
  margin: 0;
    @media screen and (max-width: 768px) {
        padding: 8px;  /* Ajuste para telas menores */
        font-size: 14px;  /* Redução de tamanho de fonte para telas menores */
      }
    
`;
const AudioCircuito = styled.audio`
    display: ; // Oculta o elemento de áudio
;`

function Header() {
    return (
        <HeaderContainer>
            <TituloPessoal>Bem Vido ao meu site.</TituloPessoal>
            <AudioCircuito>
                
            </AudioCircuito>
            <OpcoesHeader />
        </HeaderContainer>
    );
}

export default Header;
