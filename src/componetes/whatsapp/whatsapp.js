import React from 'react';
import './FloatingWhatsAppButton.css'; // Estilo CSS para o botão flutuante
import Whatsapp from '../../imagens/whatsapp.png';

function FloatingWhatsAppButton() {
  // Número de telefone para o qual o WhatsApp será direcionado
  const whatsappNumber = '11 91760-0022';

  // Texto da mensagem que será enviada ao clicar no botão do WhatsApp
  const whatsappMessage = 'Olá! Estou entrando em contato pelo seu site.';

  // URL do WhatsApp com o número e mensagem pré-definidos
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="floating-whatsapp-button">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={Whatsapp} alt="Whatsapp" className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default FloatingWhatsAppButton;