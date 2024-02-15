import styled, {keyframes} from "styled-components";
import React from "react";
import JavaScriptIcon from '../../imagens/java.svg';
import ImagemReact from '../../imagens/logo.svg';


const HabilidadesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px; /* Adicionando padding igual nos lados */
  overflow: hidden; /* Oculta o conteúdo que ultrapassa os limites da tela */
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
  text-align: center;
  padding: 15px 0;
  border: 1px solid #00ccff; /* Adicionando borda */
  border-radius: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ConteudoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
`;

const StyledParagraph = styled.p`
  color: #f6f6f6;
  line-height: 1.5;
  text-align: justify;
  margin: 0 2px; /* Margem de 2px nos lados direito e esquerdo */
`;

const StyledList = styled.ul`
  color: #f6f6f6; 
  list-style-type: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ToolIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactImage = styled.img`
  height: 20vmin;
  pointer-events: none;
  animation: ${spin} infinite 20s linear;
`;

const TextWithToolIcon = ({ text, toolIcon }) => (
  <StyledListItem>
    <ToolIcon src={toolIcon} alt="Tool Icon" />
    <span>{text}</span>
  </StyledListItem>
);

const Experiencia = () => {
  return (
    <HabilidadesContainer>
      <TituloHabilidade>Minhas Experiências</TituloHabilidade>
      <ConteudoContainer>
        <ReactImage src={ImagemReact} alt="React Icon" />
        <StyledParagraph>
          Como Desenvolvedor Full Stack, minhas competências têm sido essenciais para o sucesso do projeto em que estou
          atualmente envolvido na "A Mais Indicada". Utilizo minhas habilidades em
        </StyledParagraph>
      </ConteudoContainer>
      <StyledList>
        <TextWithToolIcon text="JavaScript e TypeScript para desenvolver a lógica do lado do cliente, proporcionando uma experiência de usuário dinâmica e interativa no site da Cachaça A Mais Indicada." toolIcon={JavaScriptIcon} />
      </StyledList>
      <StyledParagraph>
        Em resumo, a combinação dessas tecnologias tem sido a base sólida para meu trabalho na "A Mais Indicada",
        proporcionando um ambiente onde posso aplicar meu conhecimento de maneira prática e eficaz, resultando em
        um site de qualidade e funcionalidades avançadas. Essas experiências enriquecem meu portfólio, demonstrando
        minha versatilidade e capacidade de enfrentar diversos desafios no desenvolvimento web.
      </StyledParagraph>
    </HabilidadesContainer>
  );
};

export default Experiencia;
