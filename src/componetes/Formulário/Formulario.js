import styled from "styled-components";

const FormularioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px; /* Adicionando padding igual nos lados */
  overflow: hidden; /* Oculta o conteúdo que ultrapassa os limites da tela */
`;

const TituloFormulario = styled.h2`
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

const FormularioWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormularioInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormularioTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormularioButton = styled.button`
  padding: 10px 20px;
  background-color: #00ccff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0099cc;
  }
`;

function Formulario() {
  return (
    <FormularioContainer>
      <TituloFormulario>Entre em Contato</TituloFormulario>
      <FormularioWrapper>
        <FormularioInput type="text" placeholder="Nome" />
        <FormularioInput type="email" placeholder="Email" />
        <FormularioTextarea placeholder="Mensagem"></FormularioTextarea>
        <FormularioButton type="submit">Enviar</FormularioButton>
      </FormularioWrapper>
    </FormularioContainer>
  );
}

export default Formulario;
