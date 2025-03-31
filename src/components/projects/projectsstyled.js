import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 1rem 1rem 0 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1050px;;
    @media (max-width: 768px) {
        padding: 50px 0 0 0;
        justify-content: flex-start;
    }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

export const TechIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.a`
  width: 45%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
  color: rgb(231, 229, 229);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease, transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    width: 60%;
    font-size: 1rem;
  }
`;
