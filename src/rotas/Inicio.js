import styled from 'styled-components';
import Titulo from '../componetes/Titulo/Titulo';
import SobreMim from '../componetes/SobreMim/SobreMim';
import Experiencia from '../componetes/Experiencia/Experiencia';
import Projetos from '../componetes/Projetos/Projetos';
import Repositorios from '../componetes/Repositorios/Repositorios';

const AppContainer = styled.div`
@media (max-width: 768px) {
  body {
    font-size: 14px;
    margin: 0 10px;
  }
  width: 100vw;
  min-height: 100vh;
  
  background-size: cover; 
   @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  } 
}`
function Inicio() {
  return (
    <AppContainer>
      <Titulo/>
      <SobreMim/>
      <Experiencia/>
      <Projetos/>
      <Repositorios/>
           

    </AppContainer>

  )


}
export default Inicio;
