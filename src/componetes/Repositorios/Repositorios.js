import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HabilidadesContainer = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 20px; /* Adicionando padding igual nos lados */

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0; /* Removendo o padding em telas menores */
}
`;

const TituloHabilidade = styled.div`
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

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 15px 0;
  }
`;

const ListaRepositorios = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const RepositorioItem = styled.li`
  width: 18%;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.9);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  a {
    display: block;
    color: #00ccff;
    text-decoration: none;
    font-weight: bold;
  }
`;

const LinhaDivisoria = styled.hr`
  border: 1px solid #ccc;
  margin: 20px 0;
`;

const BotaoAcao = styled.button`
  background-color: ${({ bgColor }) => bgColor || "#00ccff"};
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

function Repositorios() {
  const [repositorios, setRepositorios] = useState([]);
  const [mostrarMais, setMostrarMais] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/cleberfarias/repos')
      .then(response => response.json())
      .then(data => setRepositorios(data))
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  const toggleMostrarMais = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <HabilidadesContainer>
      <div>
        <TituloHabilidade>Meus Repositórios</TituloHabilidade>
        <ListaRepositorios>
          {repositorios.slice(0, mostrarMais ? repositorios.length : 5).map(repository => (
            <RepositorioItem key={repository.id}>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                Saiba Mais
              </a>
            </RepositorioItem>
          ))}
        </ListaRepositorios>
        <LinhaDivisoria />
        <BotaoAcao onClick={toggleMostrarMais} bgColor={mostrarMais ? "#ff6666" : "#00ccff"}>
          {mostrarMais ? "Recolher" : "Mostrar Mais"}
        </BotaoAcao>
      </div>
    </HabilidadesContainer>
  );
}

export default Repositorios;
