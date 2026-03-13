import styled, { keyframes } from "styled-components";

const gradientBorder = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
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

export const ContainerSkills = styled.div`
    width: 80%;
    display: flex;
    gap: 3rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
`;

export const ContainerTechnicalSkills = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitleTechnicalSkills = styled.h3`
    font-size: 25px;
    margin: 0;
    color: var(--text-secondary);
    text-align: center;
    padding: 1rem;
    font-family: var(--font-display);
`;

export const SubContainerTechnicalSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerSoftSkills = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitleSoftSkills = styled.h3`
    font-size: 25px;
    margin: 0;
    color: var(--text-secondary);
    padding: 1rem;
    text-align: center;
    font-family: var(--font-display);
`;

export const SubContainerSoftSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerIllustrationTitle = styled.div`
    width: ${(props) => props.size || '60px'}; 
    height: ${(props) => props.size || '60px'}; 
    padding: 1rem;
`;

export const Illustration = styled.img`
    width: ${(props) => props.sizes || '60px'}; 
    height: ${(props) => props.sizes || '60px'}; 
    padding: 0.5rem;
    background-color: var(--bg-secondary);
    border-radius: 8px;
`;

export const TitleIllustration = styled.h4`
    font-size: 10px;
    font-weight: 300;
    margin: 0;
    color: var(--text-muted);
    text-align: center;
`;

export const SoftSkillItem = styled.div`
    background: var(--bg-card);
    color: var(--text-secondary);
    padding: 12px 24px;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 8px;
        padding: 2px;
        background: var(--gradient-lavanda);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.5;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: var(--glow-lavanda);
        
        &::before {
            opacity: 1;
            animation: ${gradientBorder} 2s linear infinite;
        }
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const TechnicalSkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--bg-card);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: default;
    width: 70px;
    text-align: center;
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);

    &:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: var(--glow-lavanda);
        border-color: var(--lavanda-dark);
    }

    @media (max-width: 768px) {
        width: 60px;
    }
`;

export const TechnicalSkillImage = styled.img`
    width: 32px;
    height: 32px;
    padding: 8px;
    transition: transform 0.3s ease;
    
    ${TechnicalSkillItem}:hover & {
        transform: scale(1.1);
    }
`;
