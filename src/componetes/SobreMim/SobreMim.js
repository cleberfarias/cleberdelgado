import styled from "styled-components";
import LinkedInIcon from '../../imagens/linkedin.png';
import GitHubIcon from '../../imagens/github.png';

const SobreMimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
`;

const TituloSobreMim = styled.h2`
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
  border: 1px solid #00ccff; /* Adicionando borda */
  border-radius: 10px;
`;

const TextoPerfil = styled.p`
  color: #f6f6f6; 
  line-height: 1.5;
  text-align: justify;
  margin: 0;
  padding: 0 2px; /* Margem de 2px nos lados direito e esquerdo */
  overflow-wrap: break-word; /* Quebra de palavra para evitar que o texto ultrapasse a borda */
`;

const ImagensContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Imagens = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #22778b;
  width: calc(50% - 16px); /* 50% do espaço disponível - espaço para gap */
  text-align: center;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 100;
  padding: 10px;
  text-decoration: none;
  color: #f6f6f6;
  font-family: 'Montserrat', sans-serif;
  margin: 8px; /* Espaçamento entre os botões */

  &:hover {
    background-color: rgba(255, 255, 255, 0.3); /* Adicionando 50% de transparência */;
  }
`;

const Icone = styled.img`
  width: 30px;
  height: 30px;
`;

function SobreMim() {
  return (
    <SobreMimContainer>
      <TituloSobreMim>Sobre Mim</TituloSobreMim>
      <TextoPerfil>
        Olá! Sou Cleber Farias, um profissional apaixonado por Tecnologia da Informação, com expertise em Desenvolvimento Full Stack e SDR. Atualmente, atuo como Desenvolvedor Full Stack na Mais Indicada, uma cachaçaria em Celso Ramos, Santa Catarina.

        Com mais de 5 anos de experiência em vendas de produtos e tecnologia, iniciei minha jornada no desenvolvimento web em 2023. Minhas principais competências incluem:

        Domínio de JavaScript, TypeScript, React, Styled-Components e NodeJS
        Criação de aplicações web inovadoras
        Compreensão das necessidades dos clientes e tradução em soluções tecnológicas eficientes
        Capacitação em pré-vendas e vendas consultivas
        Meu objetivo é contribuir significativamente para projetos desafiadores, unindo meu conhecimento técnico com a expertise em vendas. Estou comprometido em alcançar resultados excepcionais e acompanhar as novas tecnologias do mercado. Sou ágil no desenvolvimento e me adapto facilmente a mudanças e desafios.

        Estou aberto a oportunidades de projetos freelance, contratação PJ ou efetiva. Vamos nos conectar e explorar juntos novas possibilidades!      </TextoPerfil>
      <ImagensContainer>
        <Imagens href="https://www.linkedin.com/feed/" target="_blank">
          <Icone src={LinkedInIcon} />
          LinkedIn
        </Imagens>
        <Imagens href="https://github.com/cleberfarias" target="_blank">
          <Icone src={GitHubIcon} />
          GitHub
        </Imagens>
      </ImagensContainer>
    </SobreMimContainer>
  );
}

export default SobreMim;
