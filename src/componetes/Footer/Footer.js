import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const FooterContainer = styled.footer`
  background-image: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 1em 0; /* Ajuste na propriedade de padding */
  }

  @media screen and (min-width: 1728px) {
    padding: 3em 0;
  }
`;

const FooterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 1em;

  @media screen and (min-width: 1024px) {
    order: -1; /* Muda a ordem no layout para que o título fique à esquerda */
    margin-bottom: 0; /* Remover a margem inferior quando o título estiver à esquerda */
    margin-right: 20px; /* Adiciona espaço à direita do título */
  }
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 16px;
  }
`;

const FooterListItem = styled.li`
  margin: 0.6em 0;
  font-size: 14px;
  text-decoration: none;
`;

const FooterLink = styled.a`
  color: #FFF;
  text-decoration: none;
  display: flex;
  align-items: center;

`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 24px;
  margin-right: 6px; /* Reduzir o espaço entre o ícone e o texto *
  padding: 3px;
`;

const WhatsappIcon = styled(ImWhatsapp)`
  font-size: 24px;
  margin-right: 6px; /* Reduzir o espaço entre o ícone e o texto */
  padding: 3px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Cleber Delgado</FooterTitle>

      <FooterList>
        <FooterListItem>
          <FooterLink href="mailto:cleber.fdelgado@gmail.com">E-mail: cleber.fdelgado@gmail.com</FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="https://wa.me/48999019525" target="_blank">Contato: +55 (48) 99901-9525  <WhatsappIcon /></FooterLink>
        </FooterListItem>
        <FooterListItem>
          <FooterLink href="https://www.instagram.com/cleber.fdelgado/" target="_blank">
            <InstagramIcon />
          </FooterLink>
        </FooterListItem>
      </FooterList>
    </FooterContainer>
  );
}

export default Footer;
