import styled from "styled-components";

const RodapeStilo = styled.div`
    display: flex;
    color: #fff;
    justify-content: center;
    flex-direction: row;
    gap: 16px;
    padding: 0;
    color: hsl(0, 0%, 100%);
    background-color: #22778f;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.700rem; 
    font-weight: 100;
    margin: auto;
`;

function Rodape(){
    return(
        <RodapeStilo>
            <p>Desenvolvido por Cleber Delgado.</p>
        </RodapeStilo>
    )
}

export default Rodape;
