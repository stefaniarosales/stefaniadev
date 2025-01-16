import styled from 'styled-components';

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectsList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProjectFrame = styled.iframe`
  width: 95%;
  height: 400px;
  border: none;
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

export const NavigationButton = styled.button`
  background-color: rgba(90, 90, 90, 0.75);
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: #b7b7b7;
  &:hover {
    color:rgb(240, 237, 237);

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