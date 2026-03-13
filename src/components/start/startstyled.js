import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -200% center;
    }
    100% {
        background-position: 200% center;
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0 3rem;
    gap: 4rem;
    max-width: 850px;
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
    animation: ${float} 3s ease-in-out infinite;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const SubTitle = styled.h2`
    font-weight: 300;
    font-size: 1.7rem;
    margin: 0;
    color: var(--text-secondary);
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`
export const Img = styled.img`
    width: 350px;
    height: 600px;
`

export const DownloadButton = styled.button`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-weight: 600;
  background: var(--gradient-lavanda);
  color: var(--bg-primary);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--glow-lavanda);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--glow-lavanda-strong);
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    width: 60%;
    font-size: 1rem;
  }
`;
export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.2s ease;
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

export const ContainerSpeechBubble = styled.div`
  margin-left: 200px;
  padding: 10px;
  text-align: center;
  animation: ${float} 2.5s ease-in-out infinite;
  animation-delay: 0.5s;
`