import styled from "styled-components";
import React from "react";

import Cards from "../cards/Cards";

const HabilidadesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 20px; /* Adicionando padding igual nos lados */
overflow-x: hidden;


@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0; /* Removendo o padding em telas menores */
}
`;
const TituloProjetos = styled.h2`
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

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Projetos = () => {
  return (
    <HabilidadesContainer>
      <TituloProjetos>Meus Projetos</TituloProjetos>
      <Cards/>
    </HabilidadesContainer>
  );
};

export default Projetos;
