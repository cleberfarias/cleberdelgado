import styled from 'styled-components';
import ImagemDeFundo from '../imagens/fundo.jpg';
import Titulo from '../componetes/Titulo/Titulo';
import SobreMim from '../componetes/SobreMim/SobreMim';

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
      <SobreMim/>
           

    </AppContainer>

  )


}
export default Inicio;
