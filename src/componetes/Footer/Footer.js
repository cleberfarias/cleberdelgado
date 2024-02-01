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
  margin-left: 0.6em;
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  @media screen and (min-width: 1024px) {
    margin-left: auto; /* Move os ícones para a direita no layout grande */
  }
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 24px;
  margin-right: 16px;
`;

const WhatsappIcon = styled(ImWhatsapp)`
  font-size: 24px;
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
          <FooterLink href=" https://w.app/CleberDelgado" target="_blank">
            Contato: <ImWhatsapp /> +55(48) 99901-9525
          </FooterLink>

        </FooterListItem>
        <FooterLink href="" target="_blank"><InstagramIcon /></FooterLink>
      </FooterList>


    </FooterContainer>
  );
}

export default Footer;