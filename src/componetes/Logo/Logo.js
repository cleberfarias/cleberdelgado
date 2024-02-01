import logo from '../../imagens/logo.jpg';
import styled from 'styled-components';


const LogoContainer = styled.div`
    margin-right: auto; 
    display: flex;
    align-items: center;
    padding-right: 20px;
`;

const LogoImage = styled.img`
    width: 100%;  /* Ajuste conforme necessário */
    max-width: 250px;  /* Largura máxima para evitar distorções */
    height: auto;
    
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='Logo'/>    
        </LogoContainer>
    );
}

export default Logo;