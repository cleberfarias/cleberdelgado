import styled from 'styled-components';


const Opcoes = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Opcao = styled.li`
font-family: 'Playfair Display', serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 10px;  /* Espaçamento uniforme */
  cursor: pointer;
  min-width: 120px;
  color: linear-gradient(90deg, #002f52 35%, #326589 165%);
  &:hover {
    color: #00ff00; /* Cor verde fluorescente ao passar o mouse */
  }

  @media screen and (max-width: 768px) {
    padding: 8px;  /* Ajuste para telas menores */
    font-size: 14px;  /* Redução de tamanho de fonte para telas menores */
  }
`;

const TextoOpcao = styled.p`
  margin: 0;
`;

const textoOpcoes = ['Inicio', 'Sobre Mim', 'Expêriencias', 'Projeto', 'Repositórios', 'Habilidades'];


function OpcoesHeader() {
    return (
        <Opcoes>
        {textoOpcoes.map((texto, index) => (
          <Opcao key={index}>
            
              <TextoOpcao>{texto}</TextoOpcao>
            
          </Opcao>
        ))}
      </Opcoes>
    );
}

export default OpcoesHeader;
