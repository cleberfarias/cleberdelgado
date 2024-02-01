import styled from "styled-components";

const HabilidadesContainer = styled.header`
    width: 100vw;
    min-height: 100vh;
    padding: 0px;
    background-image: linear-gradient(90deg, #000000 35%, #808080 165%);
    
`;

const TituloHabilidade = styled.div`
    font-family: 'Playfair Display', serif;
    color: #22778b; 
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    background-image: linear-gradient(90deg, #000000 35%, #808080 165%);
    

`;
const TextoPerfil = styled.p`
    font-family: 'Playfair Display', serif;
    color: #22778b; 
    font-size: 15px;
    display: flex;
    
    align-items: center;
    justify-content: center;
    text-align: justify;
    padding: 0 20px;
`


function SobreMim() {
    return (
        <HabilidadesContainer>
            <TituloHabilidade>Sobre Mim</TituloHabilidade>
            <TextoPerfil>Desenvolvedor Full Stack na empresa Mais Indicada uma cachaçaria de
                Celso Ramos Santa Catarina. Tenho mais de 5 anos de experiência em vendas de produtos e tecnologia, 
                iniciei minha jornada no desenvolvimento web em 2023.Minhas principais competências são o domínio de
                Javascript, TypeScript, React, Styled-Components e NodeJS, que utilizo para criar aplicações web inovadoras,
                e a habilidade de compreender as necessidades dos clientes e traduzi-las em soluções tecnológicas eficientes.
                Além disso, sou capacitado em pré-vendas e vendas consultivas, tendo realizado diversos cursos e certificações
                na área. Meu objetivo é contribuir de maneira significativa para projetos desafiadores, unindo meu conhecimento
                técnico com a expertise em vendas, visando sempre alcançar resultados excepcionais. Sou um entusiasta dedicado
                em acompanhar as novas tecnologias do mercado, buscando aprimorar meus conhecimentos diariamente. Sou comprometido
                com a agilidade no desenvolvimento e me adapto facilmente a mudanças e desafios.</TextoPerfil>

        </HabilidadesContainer>

    )
}
export default SobreMim;