import styled from "styled-components";

const HabilidadeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
`;

const TituloHabilidade = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  background-image: linear-gradient(97.54deg, rgba(0, 47, 82, 0.9) 35.49%, rgba(50, 101, 137, 0.9) 165.37%);
  color: #00ccff;
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 15px 0;
  border: 1px solid #00ccff;
  border-radius: 10px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const ListContainer = styled.div`
  flex: 1;
  text-align: center; /* Centraliza o texto dentro do ListContainer */
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: #fff;
  diplay: flex;
  text-align: center;

`;

const ListItem = styled.li`
  list-style: none;
  color: #fff;
  text-align: left;
  margin-left: 20px;
  padding-left: 10px;
  position: relative;
  diplay: flex;
  aling-itens: center;
  ;
  &:before {
    content: "•";
    color: #00ccff;
    font-weight: bold;
    position: absolute;
    left: -20px;
  }
`;

function Habilidade() {
    return (
        <HabilidadeContainer>
            <TituloHabilidade>Minhas Habilidades</TituloHabilidade>
            <Section>
                <ListContainer>
                    <Title>Habilidade</Title>
                    <ul>
                        <ListItem>CSS </ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>HTML </ListItem>
                    </ul>
                </ListContainer>
                <ListContainer>
                    <Title>Conhecimento</Title>
                    <ul>
                        <ListItem>Linguagem Python Back end </ListItem>
                        <ListItem>Mysql </ListItem>
                        <ListItem>Java </ListItem>
                        <ListItem>Spring Boot - API</ListItem>
                    </ul>
                </ListContainer>
                <ListContainer>
                    <Title>Biblioteca e Framework</Title>
                    <ul>
                        <ListItem>React</ListItem>
                        <ListItem>Vscode</ListItem>
                        <ListItem>Angular</ListItem>
                        <ListItem>Django</ListItem>
                        <ListItem>Spring</ListItem>
                    </ul>
                </ListContainer>
            </Section>
        </HabilidadeContainer>
    )
}
export default Habilidade;
