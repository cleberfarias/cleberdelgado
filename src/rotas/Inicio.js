import styled from 'styled-components';
import ImagemDeFundo from '../imagens/fundo.jpg';
import Titulo from '../componetes/Titulo/Titulo';

const AppContainer = styled.div`
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
function Inicio() {
  return (
    <AppContainer>
      <Titulo/>
           

    </AppContainer>

  )


}
export default Inicio;
