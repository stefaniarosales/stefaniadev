import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0 3rem;
    gap: 4rem;
    @media (max-width: 768px) {
      padding: 50px 0 0 0;
      justify-content: flex-start;
      gap: 5rem;
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
    font-size: 1.7rem;
    margin: 0;
    color: #B7B7B7;
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
  width: 25%;
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
    width: 60%;
    font-size: 1rem;
  }
`;
export const ContainerIconsRedes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const ContainerIconsBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.9rem;
  }
`
//SpeechBubble
export const ContainerSpeechBubble = styled.div`
  margin-left: 200px;
  padding: 10px;
  text-align: center;

`