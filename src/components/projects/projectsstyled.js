import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1050px;
    
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${fadeIn} 0.6s ease forwards;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--glow-lavanda-strong);
    border-color: var(--lavanda-dark);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 18, 0.85);
  backdrop-filter: blur(8px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
  
  h3 {
    font-family: var(--font-display);
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    background: var(--gradient-lavanda);
    background-clip: text;
    color: transparent;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TechIcon = styled.img`
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 0.5rem;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  background: transparent;
  color: var(--lavanda-light);
  border: 2px solid var(--lavanda-dark);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: var(--gradient-lavanda);
    color: var(--bg-primary);
    box-shadow: var(--glow-lavanda);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;
