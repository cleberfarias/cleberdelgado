import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import EmBreve from '../../imagens/Breve.jpeg';

const CarrosselSection = styled.section`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: auto;
  max-width: 2100px;
`;

const CarrosselContainer = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  margin: 0 auto;
  max-width: 1100px;
  text-align: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const DescricaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const BotoesAncora = styled.a`
  background-image: linear-gradient(97.54deg, rgba(0, 47, 82, 0.9) 35.49%, rgba(50, 101, 137, 0.9) 165.37%);
  color: #FFF;
  padding: 10px 0px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    color: #00ff00; /* Cor verde fluorescente ao passar o mouse */
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
    height: 120%;
    border-radius: 10px; /* Opcional: adicione border-radius às imagens */
  }
`;

function Cards() {
  return (
    <CarrosselSection className="carrossel">
      <CarrosselContainer className="carrossel__container">
        <Swiper
          spaceBetween={20} // Ajuste o espaço entre as imagens
          slidesPerView={3} // Mostrar uma imagem por vez
          centeredSlides
          navigation
          pagination={{ clickable: true }}
        >
          <StyledSwiperSlide>
            <img src={EmBreve} alt="Projeto A Mais Indicada" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={EmBreve} alt="Em Breve" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={EmBreve} alt="Em Breve" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={EmBreve} alt="Em Breve" />
          </StyledSwiperSlide>
        </Swiper>
      </CarrosselContainer>

      <Card className="card">
        <DescricaoContainer>
          <BotoesAncora href='/catálogo' className="botões__ancora">Saiba mais</BotoesAncora>
        </DescricaoContainer>
      </Card>
    </CarrosselSection>
  );
}

export default Cards;