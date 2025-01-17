import styled, { keyframes, css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';




export const ProjectImage = styled.img`
  width: 100% ;
  height: 100%;
  object-fit: cover;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-pagination-bullet {
    background-color: #007bff;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 300px;
`;



export const Container = styled.section`
    width: 100%;
    padding: 2rem 1rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 50px 0 0 0;
        justify-content: flex-start;
    }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
`;

export const CarouselContainer = styled.div`
  width: 60%; /* Ajusta el ancho según lo necesites */
  max-width: 1200px; /* Limita el ancho máximo */
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
`;


export const ProjectsList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
`;

export const ContainerMoreInfoButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`

export const MoreInfoButton = styled.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
  color:rgb(231, 229, 229);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition:  0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 1rem;
  }
`;

export const TechnologiesList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

export const TechnologyIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 5px;
`;