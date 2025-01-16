import styled, { keyframes, css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';




export const ProjectImage = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  object-fit: contain;
`;

export const StyledSwiper = styled(Swiper)`
  width: 50%;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
`;

export const ProjectsList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
`;


export const MoreInfoButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
  &:hover {
    background-color: rgb(230, 230, 230);
    cursor: pointer;
  }
`;

// Estilos de los botones
export const NavigationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  span {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    
  }
  .active {
    background-color: #333;
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