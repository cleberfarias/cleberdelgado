import styled from "styled-components";

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

function SobreMim() {
  return (
    <SobreMimContainer>
      <TituloSobreMim>Sobre Mim</TituloSobreMim>
      <TextoPerfil>
        Desenvolvedor Full Stack na empresa Mais Indicada, uma cachaçaria de Celso Ramos, Santa Catarina. Tenho mais de 5 anos de experiência em vendas de produtos e tecnologia, iniciei minha jornada no desenvolvimento web em 2023. Minhas principais competências são o domínio de Javascript, TypeScript, React, Styled-Components e NodeJS, que utilizo para criar aplicações web inovadoras, e a habilidade de compreender as necessidades dos clientes e traduzi-las em soluções tecnológicas eficientes. Além disso, sou capacitado em pré-vendas e vendas consultivas, tendo realizado diversos cursos e certificações na área. Meu objetivo é contribuir de maneira significativa para projetos desafiadores, unindo meu conhecimento técnico com a expertise em vendas, visando sempre alcançar resultados excepcionais. Sou um entusiasta dedicado em acompanhar as novas tecnologias do mercado, buscando aprimorar meus conhecimentos diariamente. Sou comprometido com a agilidade no desenvolvimento e me adapto facilmente a mudanças e desafios.
      </TextoPerfil>
    </SobreMimContainer>
  );
}

export default SobreMim;
