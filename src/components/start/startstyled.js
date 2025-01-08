import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    //tablet
    @media (max-width: 768px) {
        padding: 0;
        padding-left: 0;
    }
`
export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SubTitle = styled.h2`
    font-weight: lighter;
    font-size: 4rem;
    margin: 0;
    /* color: #B7B7B7; */
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`
export const Img = styled.img`
    width: 350px;
    height: 600px;
`

// Botón cv
export const DownloadButton = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(190, 149, 196, 1) 0%, rgba(159, 134, 192, 1) 41%, rgba(224, 177, 203, 1) 100%);
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1rem;
  }
`;