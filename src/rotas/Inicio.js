import styled from 'styled-components';
import Titulo from '../componetes/Titulo/Titulo';
import SobreMim from '../componetes/SobreMim/SobreMim';
import Experiencia from '../componetes/Experiencia/Experiencia';
import Projetos from '../componetes/Projetos/Projetos';
import Repositorios from '../componetes/Repositorios/Repositorios';
import Habilidade from '../componetes/Habilidade/Habilidade';
import Formulario from '../componetes/Formulário/Formulario';
import Footer from '../componetes/Footer/Footer';
import Header from '../componetes/Header/Header';
import Rodape from '../componetes/Rodape/Rodape';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover; 

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 10px;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

function Inicio() {
  return (
    <AppContainer>
      <Header/>
      <Titulo />
      <SobreMim />
      <Experiencia />
      <Projetos />
      <Repositorios />
      <Habilidade />
      <Formulario />
      <Footer/>
      <Rodape/>
    </AppContainer>
  )
}

export default Inicio;
